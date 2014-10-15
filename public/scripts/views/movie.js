var MovieIndividualView = Backbone.Marionette.ItemView.extend({
	template: '#content',
	events: {
		'click [data-click]': 'showDetails'
	},
	showDetails: function() {
		App.mainRegion.show(new DetailView({model:this.model}));
	}
});