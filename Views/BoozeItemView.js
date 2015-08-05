var BoozeItemView = Backbone.View.extend({
	events:{
		'click .delete':'delete',
	},

	template: _.template('<li><%= name %><button class="delete">Delete</button></li>'),

	initialize: function(options) {
		// grabs the model key from render function in Booze ListView
		this.model = options.model;
		this.render();
	},

	delete: function() {
		this.$el.css('color','red');
		this.model.destroy({
			success:function(){console.log('success',arguments)},
			error:function(){console.log('error',arguments)},
		});
		this.$el.css('display','none');
		// this.$el.fadeOut('fast');
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON() ));
		return this;
	},

});
