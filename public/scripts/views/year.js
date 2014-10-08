var YearView = Backbone.Marionette.ItemView.extend({
	template: _.template('<%=listofYear()%>'),
	templateHelpers: {
		listofYear: function(){
			var li = '';
			for (var i = 1970; i <= 2015; i++) {
				li+= '<div class="year-wrapper"><span class="genre">' + i+ ' </span></div>';
			};
			return li;
		}
	},
	className: 'position content-holder'
})