define([
    'backboneMarionette',
    'http',
], function (Marionette, Http) {

    'use strict';

    /* create global object app, you can name it whatever you wish */
    var app = new Marionette.Application();

    app.addRegions({
        headerRegion  : '#header',
        footerRegion  : '#footer',
        contentRegion  : '#content',
        modalRegion : "#modal"
    });

    /* add initializer */
    app.addInitializer(function(){

        /* Marionette hack to work with requireJS */
        Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId, callback){

            // Marionette expects "templateId" to be the ID of a DOM element.
            // But with RequireJS, templateId is actually the full text of the template.
            var template = templateId;

            // Make sure we have a template before trying to compile it
            if (!template || template.length === 0){
                var msg = "Could not find template: '" + templateId + "'";
                var err = new Error(msg);
                err.name = "NoTemplateError";
                throw err;
            }

            return template;
        }

        // initialize Http object to make backbone work with POST instead of GET
        // Http.initialize({type:'POST'});

        // filter all http for errors
        Http.onAjaxError(function (number) {
            app.router.navigate('error/' + number, {trigger:true});
        })
            // hook ajax calls and display a nice loader
            .onAjaxStart(function () {
                $('#loader').show();
            })
            // hide loader when finished AJAX call
            .onAjaxComplete(function () {
                $('#loader').hide();
            });
    });
    app.modalRegion.on("show", function() {
        this.$el.hide();
        this.$el.fadeIn("fast");
    });
    app.modalRegion.on("close", function() {
        this.$el.fadeOut("fast");
    })

    app.contentRegion.on("show", function(view) {
        this.$el.hide();   this.$el.fadeIn("fast");




    });


    return app;
});
