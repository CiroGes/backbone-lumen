var PostListView = Backbone.View.extend({

    template: _.template('<h1>Posts</h1><ul id="posts">Loading...</ul>'),

    initialize: function() {
        this.render();

        this.collection = new PostCollection();
        this.collection.on('sync', this.renderPost, this);
        this.collection.fetch();
    },

    render: function() {
        $(this.el).html(this.template());
    },

    renderPost: function() {

        this.$('#posts').html('');

        _.each(this.collection.toJSON(), function(post) {

            var view = new PostView({
                model: new Backbone.Model(post)
            });

            this.$('#posts').append(view.render().el);
        });
    }
});