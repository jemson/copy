var IndividualView = Backbone.Marionette.ItemView.extend({
	template: '#content',
	className: 'content-holder',
	events: {
		'click [data-click]': 'showDetails'
	},
	showDetails: function() {
		App.mainRegion.show(new DetailView({model:this.model}));
	}
});