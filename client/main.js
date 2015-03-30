Deps.autorun(function() {
	allusers = Meteor.subscribe('allUsers');
	allLocation = Meteor.subscribe('allLocation');
});