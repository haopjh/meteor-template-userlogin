Template.apipage.helpers({
	getAllAPIRoutes: function() {
		var routerList = [];
		_.each(Router._stack._stack, function(route) {
			if(route.path.indexOf('/api') > -1) {
				routerList.push(route.path);
			}
		});

		console.log(routerList);


		return routerList;
	}
})