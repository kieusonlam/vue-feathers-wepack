# vue-feathers

> 

## About

Based on [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)
This project uses [Feathers](http://feathersjs.com). 

## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/vue-feathers; npm install
    ```

3. Start your app
    
    ``` bash
    # serve in dev mode, with hot reload at localhost:3030
    npm run dev

    # build for production
    npm run build

    # serve in production mode
    npm start
    ```

## Feathers Testing 

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Feathers Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
