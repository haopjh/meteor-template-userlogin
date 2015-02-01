Template.home.helpers({
	getAllUsers: function() {
		return Meteor.users.find();
	}
})