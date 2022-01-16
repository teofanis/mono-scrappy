## Setup

Clone the repository and run the command from the root of the repository

copy .env.example to .env in both packages/frontend and packages/backend


```shell
$ yarn scrappy:setup
```

The command will run migrations and run the crawler effectively, seeding the database.
## NOTE

For the above command to work you'd have to have docker on your machine as the project uses Laravel sail which is based on Docker.
Alternatively, set your DB details in the .env file and run the following commands :

```shell
    // packages/backend
    composer install
    php artisan migrate
    php artisan scrape:pinboard (This is to start the scrape && seeding process)

    // packages/frontend
    yarn install && yarn build && yarn start
```

## Commands

- `yarn scrappy:setup`: Setup the project
- `yarn start`: Start the project in prod mode
- `yarn start:dev`: Start the project in dev mode

## Technologies used
- Monorepo manager- Lerna
-Typescript, Next/React, SWR, Tailwind (Front End);
-Laravel, MySQL, PHP (Back End)

## 3rd Party Libs Laravel

- Spatie's Laravel-Tags package https://github.com/spatie/laravel-tags
- Goutte (crawler) https://github.com/dweidner/laravel-goutte
