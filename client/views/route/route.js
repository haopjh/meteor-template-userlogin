Template.route.helpers({
	getAllNormalRoutes: function() {
		var routerList = [];
		_.each(Router._stack._stack, function(route) {
			if(route.path.indexOf('/api') === -1) {
				routerList.push(route.path);
			}
		});


		return routerList;
	}
})