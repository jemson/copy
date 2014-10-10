var GenreIndividualView = Backbone.Marionette.ItemView.extend({
	template: _.template('<div class="genre-wrapper"><span class="genre"><%= type%></span></div>'),
	className: 'content-holder'
});