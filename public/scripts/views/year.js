var YearView = Backbone.Marionette.ItemView.extend({
	template: _.template('<%=listofYear()%>'),
	templateHelpers: {
		listofYear: function(){
			var li = '';
			for (var i = 1970; i <= 2015; i++) {
				li+= '<span class="">' + i+ ' </span>';
			};
			return li;
		}
	},
	className: 'position'
})