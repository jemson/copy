var FeaturedIndividualView = Backbone.Marionette.ItemView.extend({
	template: _.template('<div data-content class="content small-5 columns" data-click><div><img class="image-holder" src="<%= image%>"></div><div class="movie-name"><%= name%></div></div>'),
	events: {
		'click [data-click]': 'showDetails'
	},
	showDetails: function() {
		App.mainRegion.show(new DetailView({model:this.model}));
	}
});