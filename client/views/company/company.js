Template.newCompany.events({
	"click .create-btn": function() {

		var company = {
			name: $(".create-name").val(),
			description: $(".create-description").val(),
			country: $(".create-country").val(),
			address: $(".create-address").val(),
			contact_number: $(".create-contact-number").val(),
			email: $(".create-email").val(),
		};

		Meteor.call('newCompany', company, function(err, companyId) {
			$("input").val("");
		});
			
				
		
    }
});


Template.companyList.helpers({
	getAllCompany: function() {
		return Company.find();
	}
});


Template.companyList.onRendered(function() {
	this.$('.company-list').masonry({
		itemSelector: '.list-item'
	});
});

Template.companyItem.onRendered(function() {
	$(".company-list").masonry()
		.masonry('appended', this.$(".list-item-company"));
});