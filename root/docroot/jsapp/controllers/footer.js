define([
    'backboneMarionette',
    'text!views/footer.html',
    'app'
], function (Marionette, hView, app) {

    return Marionette.ItemView.extend({
        template: hView,
        events: {
            "click a": function(e) {
                e.preventDefault();
                var href = $(e.target).attr('href');
                app.router.navigate($(e.target).attr('href'), {trigger:true});
            }
        }
    });
});
