Template.home.events({
	"keyup .home-search": function(e){
		if(e.keyCode === 13) {
			Router.go("/machine");
		}
	}
});