Template.navbar.helpers({
	active: function(name) {
		var router = Router.current();
		if(router) {
			if(router.route.getName().indexOf(name) > -1) {
				return "active";
			}
		}
	}
})