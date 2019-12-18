var HelloWorldView = Backbone.View.extend({

    template: _.template('<h1><%- message %></h1>'),

    initialize: function() {

        this.model = new Backbone.Model({
            message: 'Hello World!'
        });

        this.render();
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    }
});