var SideBarIndividual = Backbone.Marionette.ItemView.extend({
	template: _.template('<%=name%>'),
	tagName:'li trigger-click',
	className: 'nav-li',
	events: {
		'click.nav-li' : 'dataClick'
	},
	dataClick: function(){
		this.trigger('data:click', this)
	}
});

var SideBarView = Backbone.Marionette.CollectionView.extend({
	childView: SideBarIndividual,
	tagName: 'ul',
	className: 'nav-holder'
})