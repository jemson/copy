var App = new Marionette.Application();

App.addRegions({
	headerRegion: '#header-region',
	mainRegion: '#main-region',
	sidebarRegion: '#sidebar-region'
});

App.addInitializer(function(){
});

App.on('start', function(){
	App.headerRegion.show(new SearchView());
	App.mainRegion.show(new HomeView());
	App.sidebarRegion.show(new SideBarView());
});

App.start();