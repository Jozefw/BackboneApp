var BoozeListview = Backbone.View.extend({
	el: 'body',

	template: _.template('<ul id = "boozelist" ></ul>'),
	initialize: function(options) {
		// this = BoozeListView

		// saving the options
		this.options = options || {};

		// defines or maps out the collection objects
		this.collection = new BoozeCollection(options);

		// listen to the collection, on reset, call render
		this.listenTo(this.collection, 'reset', this.render);

		// get the collection from server run reset event
		this.collection.fetch({
			reset: true
		});
	},

	render: function(){
		// rendering the list template to the page prior to the actual list
		this.$el.append(this.template());

		// make an aemtpy cotainer to cache the id
		var $listContainer = this.$el.find('#boozelist');

		// each iterates through each of the models > Collection > Data
		this.collection.each(function(model){

			// passing in model data into the Itemview boozeItem is the booze item vw model
			var boozeItem = new BoozeItemView({'model':model});
			boozeItem.$el.appendTo($listContainer);
		});
	},

});