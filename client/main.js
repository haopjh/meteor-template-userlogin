Deps.autorun(function() {
	allusers = Meteor.subscribe('allUsers');
	allLocation = Meteor.subscribe('allLocation');
	allCompany = Meteor.subscribe('allCompany');
	allMachine = Meteor.subscribe('allMachine');
});