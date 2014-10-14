var YearView = Backbone.Marionette.ItemView.extend({
	template: _.template('<div class="movie-font">Year</div><%=listofYear()%>'),
	templateHelpers: {
		listofYear: function(){
			var li = '';
			for (var i = 1970; i <= 2015; i++) {
				li+= '<div data-year class="year-wrapper small-3 columns"><span class="genre">' + i + '</span></div>';
			};
			return li;
		}
	},
	events: {
		'click [data-year]' : 'dataYear'
	},
	dataYear : function(e){
		var year = e.target.textContent;
		var content = new MoviesView({year:year});
		App.mainRegion.show(content);
	},
	className: 'small-12 columns home-wrapper2'
});