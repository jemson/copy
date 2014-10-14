var GenreCollectionView = Backbone.Marionette.CompositeView.extend({
	childView: GenreIndividualView,
	className: 'small-13 columns home-wrapper2',
	template: _.template('<div class="movie-font">Genre</div>')
});