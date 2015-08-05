var BoozeItemView = Backbone.View.extend({

	template: _.template("<li><%= name %></li>"),

	initialize: function(options) {
		// grabs the model key from render function in Booze ListView
		this.model = options.model;
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON() ));
		return this;
	},

});