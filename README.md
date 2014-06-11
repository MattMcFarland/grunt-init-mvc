# grunt-init-mvc
*A backbone boilerplate that uses 'true-mvc'*
  * Version 2.0.0-beta
  * Uses: backbone, backbone.marionette, requirejs, ...
  * Requires grunt-init

## Overview
After going through various websites, tutorials, and books I've discovered that backbone scaffolding varies so widely.  So I've decided to put together what I think is the best approach to making your backbone 'true-mvc' with by using scaffolding with `grunt-init`
### Included
  * Backbone.js v1.1.2
    * Backbone Marionette
    * Backbone Binder
    * Backbone Relational
    * Backbone Validation
  * Bootstrap v3.1.1
  * jQuery v1.11.1
  * requireJS v2.1.14
  * underscore v1.6.0
    * underscore.string
  * Utilities
    * html5
    * http
    * json2
    * less
    * localstorage
    * modernizr
    * parser
    * session
    * sticky-nav

## Quick Start

`git clone https://github.com/gruntjs/grunt-init-mvc.git ~/.grunt-init/mvc`

Then go to your project directory, and punch in `grunt-init mvc`

You should now have a new folder called docroot, if you were to upload your docroot folder into your server's `httpdoc` or `public_html` folder, then you can run it right away!

## Using Jekyll

You can use the included _config.yml file if you want to use jekyll to serve it on localhost right away.
Create a _config.yml file, and put it in the root dir (not docroot, above docroot)
```yml
  source: docroot
  dest: httpdocs  # or change this to something else like _site or public_html
```
then run `jekyll serve`

## Changelog

* Refactored structure ~2.0.0-beta
* Removed rename.json  ~1.0.1-beta
