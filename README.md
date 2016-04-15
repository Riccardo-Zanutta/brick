# Brick - A **solid**, modern, not-so-opinionated front-end boilerplate. #

<a href="https://www.youtube.com/watch?v=Sagg08DrO5U"><img src='http://img.shields.io/badge/gandalf-approved-61C6FF.svg'></a>

### Introduction

Brick will give you a solid starting point to develop your next awesome project.
It includes: 
* A painless, non-intrusive CSS library, written in <a href="http://sass-lang.com/">Sass</a>;
* A solid and extendible development environment with <a href="http://gulpjs.com/">Gulp</a>, <a href="https://www.browsersync.io/">Browsersync</a> and a production environment.

### Getting started

```sh
# Clone this repository
$ git clone https://github.com/Riccardo-Zanutta/brick.git your_next_awesome_project
$ cd your_next_awesome_project

# Install dependencies
$ npm install
# Run tasks and serve
$ npm run start
# or
$ gulp --pretty
```

<a href="https://www.browsersync.io/">Browsersync</a> will mount a web server for you and opens a tab in your browser at localhost:4001 (this is the default port, you can change it in the <a href="https://github.com/Riccardo-Zanutta/brick/blob/master/config.json">config.json</a> file).

### Config
In the root of your project there's a ``` config.json ``` file, from which you can change some basic options.
If you work with <a href="http://gulpjs.com/">Gulp</a> you can see the ``` gulpfile.babel.js ``` file and change the config file accordingly.

### CSS

### Javacript

### Contributing

If you have any suggestions about the css and js structure/best practices, new gulp tasks and so on, please contribute and make a pull request.

* Fork the original repo
* if you have to test some new css/js feature, type ``` npm run start ``` which will start the dev server.
* Make a pull request
* Feel proud to contribute to the open source world :) 

### Additional infos

```sh
# You can view all of your available tasks with:
$ gulp help 
```
