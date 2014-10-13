var GenreIndividualView = Backbone.Marionette.ItemView.extend({
	template: _.template('<div data-genre class="genre-wrapper"><span class="genre"><%= type%></span></div>'),
	className: 'content-holder',
	events: {
		'click.genre-wrapper': 'getGenre'
	},
	getGenre: function(){
		var content = new MoviesView({genre:this.model.get('type')});
		App.mainRegion.show(content);
	}
});