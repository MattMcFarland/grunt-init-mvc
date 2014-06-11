/**
 * Application controller
 * Defines the function used by router
 *
 */
define([
    'backboneMarionette',
    'http',
    'app',
    'session'
], function(Marionette, Http, App) {
    'use strict';

    return {
        /* renders index page */
        actionIndex: function() {
            require(['controllers/index'], function(IndexPage){
                var indexPage = new IndexPage();
                App.contentRegion.show(indexPage);
                App.modalRegion.close();
            })

        },
        /* renders error page with correspondent failure number */
        actionError: function (actions) {
            require(['controllers/error'], function(ErrorPage){
                if(Http.isUnAuthorized(actions)) {
                    App.router.navigate('index', {trigger:true});
                    return false;
                }
                var description = Http.getStatusDescription(actions) || 'Unknown';
                var errorPage = new ErrorPage({model: new Backbone.Model({number:actions, description:description})});
                App.contentRegion.show(errorPage);
                App.modalRegion.close();

            });
        },
       /* triggers not found error/404 when page is not found */
        actionNotFound: function() {
            App.router.navigate('error/404', {trigger: true});
        }
    }
});
