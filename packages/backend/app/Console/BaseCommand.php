<?php

namespace App\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;

class BaseCommand extends Command
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @param string $question
     * @param array $rules
     * @param array $messages
     * @param string $key
     * @return mixed
     */
    public function validatedAsk(
        string $question,
        array $rules = [],
        $messages = [],
        string $key = 'value'
    ) {

        $answer = $this->ask($question);
        //validate answer against a set of rules
        $validator = Validator::make(
            [$key => $answer],
            [$key => $rules],
            $messages
        );

        //if the validation fails flush the error to the console and ask the question again.
        if ($validator->fails()) {
            collect($validator->errors()->all())->each(fn($error) => $this
                    ->error($error));
            return $this->validatedAsk($question, $rules, $messages, $key);
        }

        //return the validated answer
        return $answer;
    }
}
