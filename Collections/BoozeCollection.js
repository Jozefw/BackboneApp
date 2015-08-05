var BoozeCollection = Backbone.Collection.extend({

// collections endpoint is
	url: function(){
		return 'Data/BoozeList';
	},
	model: BoozeModel

});