var GenreIndividualView = Backbone.Marionette.ItemView.extend({
	template: _.template('<div data-genre class="genre-wrapper"><span class="genre"><%= type%></span></div>'),
	className: 'content-holder',
	events: {
		'click.genre-wrapper': 'getGenre'
	},
	getGenre: function(){
		console.log(this.model);
	}
});