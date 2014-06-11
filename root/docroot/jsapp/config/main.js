/**
 * main configuration file
 */
// Use ECMAScript 5 Strict Mode
"use strict";

// Define jQuery as AMD module
define.amd.jQuery = true;

// Require.js allows us to configure mappings to paths
// as demonstrated below:

require.config({
  baseUrl: "/jsapp/",
  paths: {
    /* config */
    router: "config/router",
    controller: "config/controller",

    /* jquery */
    jquery:'vendor/jquery/jquery',

    /* underscore */
    underscore:'vendor/underscore/underscore',
    underscoreString:'vendor/underscore/underscore.string',

    /* bootstrap */
    bootstrap:'vendor/bootstrap/js/bootstrap.min',

    /* backbone */
    backbone:'vendor/backbone/backbone',
    backboneRelational:'vendor/backbone/backbone-relational',
    backboneModelBinder:'vendor/backbone/Backbone.ModelBinder',
    backboneCollectionBinder:'vendor/backbone/Backbone.CollectionBinder',
    backboneValidation:'vendor/backbone/backbone.validation',
    backboneMarionette: 'vendor/backbone/backbone.marionette',

    /* Modernizr */
    Modernizr:'vendor/utils/modernizr-2.6.2',

    /* requirejs plugins*/
    text:'vendor/require/text',

    /* utility libraries */
    json:'vendor/utils/json2',
    parser:'vendor/utils/parser',
    session:'vendor/utils/session',
    http:'vendor/utils/http',

  },
  shim : {
    backbone : {
        exports : 'Backbone',
        deps : ['jquery','underscore']
    },
    backboneMarionette: {
        exports: 'Backbone.Marionette',
        deps: ['backbone']
    },
    underscore : {
        exports : '_'
    },
    bootstrap : {
        exports: 'bootstrap',
        deps: ['jquery']
    }
  },
  deps : ['jquery', 'underscore','bootstrap'],
  waitSeconds:15
});


// Let's kick off the application
require([
    'app',
    'router',
    'controllers/header',
    'controllers/index',
    'controllers/footer',
    'Modernizr'
], function (App, Router, HeaderView, IndexView, FooterView) {

    App.addInitializer(function() {

        var header = new HeaderView();
        App.headerRegion.show(header);

        var content = new IndexView();
        App.contentRegion.show(content);

        var footer = new FooterView();
        App.footerRegion.show(footer);

    });

    /* attach router to the app */
    App.router = Router;

    App.start();

    /* Use Push-State History with cross-browser compatability */
    Backbone.history.start({ pushState: Modernizr.history, silent: true });
    if(!Modernizr.history) {
        var rootLength = Backbone.history.options.root.length;
        var fragment = window.location.pathname.substr(rootLength);
        Backbone.history.navigate(fragment, { trigger: true });
    } else {
        Backbone.history.loadUrl(Backbone.history.getFragment())
    }
    App.getLocation = function(){
        return window.location.protocol + '//' + window.location.host
            + '/' + Backbone.history.options.root + Backbone.history.getFragment();
    }


});
