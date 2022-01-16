<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('scrappy-setup', function () {
    if($this->confirm("This command will setup the scrappy database and launch the scrapper. Do you wish to continue?")) {
        $this->comment("Scrappy setup sequence initiated...");
        for($i=5; $i >=0; $i--) {
            echo "Booting Scrappy in $i seconds...\n";
            sleep(1);
        }
        $this->info("Generating app key...");
        Artisan::call('key:generate');
        $this->info("Setting up the database...");
        Artisan::call('migrate:fresh');
        $this->info("Database setup complete. Launching scrapper...");
        Artisan::call('scrape:pinboard');
        $this->comment("Scrappy setup is complete!");
    } else {
        $this->comment("Scrappy setup sequence aborted...");
    }
})->purpose('Gets Scrappy setup and ready to go 😎');

