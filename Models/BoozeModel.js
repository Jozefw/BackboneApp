var BoozeModel = Backbone.Model.extend({
	// this is for the endpoint for delete and update or for single model
	url: 'Data/BoozeList/' +this.id,
	defaults: {
		name: "",
	}



});