//nav manipulation
this.listenTo(SideBarIndividual, 'childview:data:click', function(iv){
	
	switch ( iv.model.get('trigger') ) {
		case 'movies':
			var content = new ContentView({collection: movies});
			App.mainRegion.show(content);
		break;
		case 'genres':
			var content = new GenreCollectionView({collection: categories});
			App.mainRegion.show(content);
		break;
		case 'cinema':
			var content = new ContentView({collection: cinema});
			App.mainRegion.show(content);
		break;
		case 'featured':
			var content = new ContentView({collection: featured});
			App.mainRegion.show(content);
		break;
		case 'years':
			var content = new YearView();
			App.mainRegion.show(content);
		break;
		case 'countries':
			console.log("countries");
		break;
		case 'language':
			console.log("language");
		break;
		default:
			var content = new ContentView({collection: movies});
			App.mainRegion.show(content);
		break;
	}
});

this.listenTo(content, 'childview:data:test', function(iv){
	var options = {id: iv.model.id};
	var detail = new Movie(options)
	console.log(iv.model.id);
	console.log("click");
});