var IndividualView = Backbone.Marionette.ItemView.extend({
	template: '#content',
	className: 'content-holder',
	events: {
		'click [data-click]': 'showDetails'
	},
	showDetails: function() {
		this.trigger('data:test', this)
	}
});