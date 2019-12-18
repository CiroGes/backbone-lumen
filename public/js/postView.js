var PostView = Backbone.View.extend({

    template: _.template('<h3><%- title %></h3><p><%- author %></p><div><%- content %></div>'),

    initialize: function() {

    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});