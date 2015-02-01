/*******************************
*   
******************************/

Template.signup.helpers({
    hello: function() {
        alert("hello");
    }
});


Template.signup.events({
	"click .signup-btn": function() {
		Accounts.createUser({
			profile: {
				firstname: $(".signup-firstname").val(),
				lastname: $(".signup-lastname").val(),
			},

			password: "1234567890",
			email: $(".signup-email").val(),
			username: $(".signup-email").val(),
				
		}, function(err) {
			if(!err) {
        		Router.go("/home");
			} else {
				alert(err);
			}
		})
    }
});








