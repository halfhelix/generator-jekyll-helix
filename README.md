# generator-jekyll-helix [![NPM version][npm-image]][npm-url]

***NOTE: Currently using gulp 4.0 which is in beta!***

## Introduction

`generator-jekyll-helix ` is a very opinionated [Yeoman][yeoman] generator built
with [Jekyll][jekyll] and [gulp][gulp]. You will be able to quickly scaffold
your site and start developing. As you are working on your site your assets will
automatically be updated and injected into your browser as well as your posts.
When you are done developing and want to publish it you are two commands away
from having everything optimized and published.

## Features
> Yeoman

Ditch your startket stored in hithub and repedative setup tasks you do at the start of each project.
Yeoman asks you a few simple questions and scaffolds out a project ready to go, with just what you need.

> Jekyll

Built on top of Jekyll 3, you get a mature and stable base with the full power
that Jekyll brings you. You should be using a static site generator or templating system
if you're making more then a single page. Its 2016, get with it.

> Browser Sync

While developing locally everything you change will automatically be updated and
injected into your browser. Changing your SCSS or JavaScript files will
automatically updated them, create sourcemaps and inject them. Writing or
editing posts and pages for your website will do the same.

> Gulp Asset Pipeline

This is a big improvement over teh standard Jekyll pipeline. When you are done developing you can have your assets optimized and injected
correctly into your HTML. Your assets will be minified, compressed with gzip, and cached. Your images will be run through
compressors to save space and even your HTML will be minified.

> Bower

> Bourbon + Neat

> Deploying

Finally, once everything is done and you are ready to publish your site, you can
do it via either Amazon S3, Github Pages or Rsync. With a single command your
new/updated site is uploaded to your platform of choice.

## Getting started

### Installation

#### Dependencies
* **Ruby**: `>2.0` with Bundler `>1.10`
* **Node**: `>4.2` and Yo `>1.7.0`
* **Gulp:** Since the release candidate is running Gulp 4.0 you need to install
  `gulp-cli`: `npm install gulp-cli -g`
* **Jekyll-Helix :** Then install Jekyll-Helix: `npm install generator-jekyll-helix -g`

#### Install
* **Scaffold:** Run `yo jekyll-helix` in the directory you want scaffold your site
    in
* **Start:** Run `gulp` and watch the magic unfold

<!-- #### Update
It's recommended that you keep your gulp tasks and packages up to date, luckily
this is very easy with `generator-jekyll-helix `! All you need to do is run `yo
jekyll-helix:update` and you'll be up to date. If you want to skip the
installation and only update you can run it with `--skip-install`. **NOTE:**
Running `yo jekyll-helix:update` will overwrite any changes made to `package.json`
and your gulp files, so back them up! -->

## Usage

#### `gulp`

This is the default command, and probably the one you'll use the most. This
command will build your assets and site with development settings. You'll get
sourcemaps, your drafts will be generated and you'll only generate the last 10
posts (for speed). As you are changing your posts, pages and assets they will
automatically update and inject into your browser via
[BrowserSync][browsersync].

> `--prod`

Once you are done and want to verify that everything works with production
settings you add the flag `--prod` and your assets will be optimized. Your CSS,
JS and HTML will be minified and gzipped, plus the CSS and JS will be cache
busted. The images will be compressed and Jekyll will generate a site with all
your posts and no drafts.

#### `gulp build [--prod]`

This command is identical to the normal `gulp [--prod]` however it will not
create a BrowserSync session in your browser.

#### `gulp deploy`

When you're done developing and have built your site with either `gulp --prod`
or `gulp build --prod` you can deploy your site to either Amazon S3, Github
Pages or with Rsync.

<!-- > Amazon S3 and Rsync

If you chose either of these two, you'll have a `[rsync/aws]-credentials.json`
file in your root folder that you have to fill out. It should be pretty self
explanatory, however, if you need any help with configuring it, you should check
out either the [`gulp-awspublish`][awspublish] repo or [`gulp-rsync`][rsync]
repo for help. -->
<!--
> Github Pages

If you chose to upload to Github Pages there's no configuration besides starting
a git repo in your folder, setting an `origin` remote repo and run `gulp
deploy`. Your site will be automatically pushed to Github. See the
[FAQ][frequentlyasked] for configuring personal repos vs project repos. -->

### Subtasks

All of the subtasks lives in their own files in the `gulp` directory and are
named after what they do. You can edit or look at any of them to see how they
actually work. They're all commented.

Some sub tasks are:

#### `gulp check`

Lints your JavaScript files using ESLint with XO Space settings and run `jekyll
doctor` to look for potential errors.

#### `gulp clean`

Deletes your assets from their `.tmp` directory as well as in `dist` and deletes
any gzipped files. **NOTE:** Does not delete your images from `.tmp` to reduce
the time to build your site due to image optimizations.

#### `gulp rebuild`

Only use this if you want to regenerate everything, this will delete everything
generated. Images, assets, your Jekyll site. You really shouldn't need to do
this.

### check the project gulp file for a details on all availible subtasks

## Frequently Asked Questions

<!-- > Inject more than one JavaScript file

If you want to split up your JavaScript files into say a `index.js` and a
`vendor.js` file with files from [Bower][bower] you can do this quite easily. Create a
copy of the `scripts` gulp task and rename it to `scripts:vendor` and change the
`gulp.src` files you need:

```js
  gulp.src([
    'bower_components/somelibrary.js/dist/somelibrary.js',
    'bower_components/otherthing.js/dist/otherthing.js'
  ])
```

and then change `.pipe($.concat('index.js'))` into
`.pipe($.concat('vendor.js'))`. Then you go to the bottom of the gulpfile and
change the `assets` task:

```js
gulp.task('assets', gulp.series(
  gulp.series('clean:assets'),
  gulp.parallel('styles', 'scripts:vendor', 'scripts', 'fonts', 'images')
));
```

Notice the `scripts:vendor` task that has been added. Also be ware that things
are injected in alphabetical order, so if you need your vendor scripts before
the `index.js` file you have to either rename the `index.js` file or rename the
`vendor.js` file. When you now run `gulp` or `gulp build` it will create a
`vendor.js` file and automatically inject it at the bottom of your HTML. When
running with `--prod` it'll automatically optimize and such as well.

For more advanced uses, refer to the [`gulp-inject`][inject] documentation on
how to create individual inject tags and inject specific files into them. -->


[awspublish]: https://github.com/pgherveou/gulp-awspublish
[browsersync]: https://github.com/shakyShane/browser-sync
[browsersync-open]: https://browsersync.io/docs/options/#option-open
[contribute]: https://github.com/sondr3/generator-jekyllized/blob/master/CONTRIBUTING.md
[changelog]: https://github.com/sondr3/generator-jekyllized/blob/master/CHANGELOG.md
[frequentlyasked]: https://github.com/sondr3/generator-jekyllized#frequently-asked-questions
[gulp]: http://gulpjs.com/
[gulpfile]: https://github.com/sondr3/generator-jekyllized/blob/master/generators/gulp/templates/gulpfile.js
[inject]: https://github.com/klei/gulp-inject
[jekyll-url]: http://jekyllrb.com/docs/github-pages/#project-page-url-structure
[jekyll]: https://jekyllrb.com
[libsass]: https://github.com/hcatlin/libsass
[localtunnel]: http://localtunnel.me/
[rsync]: https://github.com/jerrysu/gulp-rsync
[yeoman]: http://yeoman.io
[npm-image]: https://badge.fury.io/js/generator-jekyllized.svg
[npm-url]: https://npmjs.org/package/generator-jekyllized
[travis-image]: https://travis-ci.org/sondr3/generator-jekyllized.svg?branch=master
[travis-url]: https://travis-ci.org/sondr3/generator-jekyllized
[coveralls-image]: https://coveralls.io/repos/sondr3/generator-jekyllized/badge.svg
[coveralls-url]: https://coveralls.io/r/sondr3/generator-jekyllized
