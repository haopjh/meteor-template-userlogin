Template.test.helpers({
	generateTestItems: function() {
		var container = [];

		for(var i=0;i<500;i++){
			container.push(i);
		}
		return container;
	}
});

Template.test.onRendered(function() {

	// $("body").css("overflow","hidden");
});