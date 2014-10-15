var HomeView = Backbone.Marionette.LayoutView.extend({
	template: '#home',
	regions: {
		cinemaRegion: '#cinema-region',
		featuredRegion: '#featured-region'
	},
	className:'small-13 columns home-wrapper2',
	onShow: function(){
		var featuredView = new FeaturedView();
		this.featuredRegion.show(featuredView);
		
		var cinemaView = new CinemaView();
		this.cinemaRegion.show(cinemaView);
	}
});








