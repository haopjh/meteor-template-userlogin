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
			$(".create-name").val("");
			$(".create-description").val("");
			$(".create-country").val("");
			$(".create-address").val("");
			$(".create-contact-number").val("");
			$(".create-email").val("");
		});
			
				
		
    }
});


Template.companyList.helpers({
	getAllCompany: function() {
		return Company.find();
	}
})