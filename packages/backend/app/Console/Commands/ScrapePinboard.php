<?php

namespace App\Console\Commands;


use Spatie\Tags\Tag;
use App\Models\Bookmark;
use App\Console\BaseCommand;
use App\Rules\PinboardUserUrl;
use Illuminate\Support\Facades\DB;

class ScrapePinboard extends BaseCommand
{
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description =
        'Crawls a pinboard user page and saves the links to the database';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrape:pinboard';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $url = $this->validatedAsk('Please enter the pinboard user url you want to scrape ?', [new PinboardUserUrl()]);
        $tags = config('scrappers.pinboard.default_tags');
        $wantedTags = collect(explode(',',$tags))->unique()->toArray();

        $this->info("Scrapping {$url} and looking for tags {$tags} - please wait...");

        //The actually scrapping should be delegated to a service to keep the handler "thin", but for simplicity I've kept it here.
        $crawler = \Goutte::request('GET', $url);

        //Select all the divs with a class of 'display' and do a sub-crawl within each
        $scrapeResults = $crawler->filter('div.display')->each(function ($displayCrawler) use ($wantedTags) {

            //Get all the tags of the display div
            $tags = $displayCrawler->filter('a.tag')->each(fn($tagCrawler) => $tagCrawler->text());
            //Check to see if there are any of the wanted tags and if doesn't do not bother and return;
            if (empty(array_intersect($tags, $wantedTags))) {
                return;
            }
            //Otherwise we'll extract the URL's, title and description combine and from the display div
            return [
                'title' => $displayCrawler->filter('a.bookmark_title')->text(),
                'url' => $displayCrawler->filter('a.bookmark_title')->attr('href'),
                'description' => $displayCrawler->filter('div.description')->text(),
                'tags' => $tags
            ];
        });


        return DB::transaction(function () use ($scrapeResults) {
            try {
                $savedBookmarks = 0;
                //Filter out "nulls" from the array and creates the db records
                foreach (array_filter($scrapeResults) as $result) {
                    //Again for simplicity this is here, but it could be in a service or in the model (createFromScrapeResult) taking a DTO returned from the Scrape service.
                    $bookmark = Bookmark::create($result);
                    $bookmark->attachTags($result['tags']);
                    $savedBookmarks++;
                }
                ($savedBookmarks > 0) ? $this->info("{$savedBookmarks} bookmarks were saved") : $this->info("No bookmarks were saved");
                return 0;
            } catch (\Exception $e) {
                $this->error($e->getMessage());
                return 1;
            }
        });

    }
}
