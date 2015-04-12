Company = new Meteor.Collection('company');

Meteor.methods({
	newCompany: function(companyAttributes){
		

		var company = _.extend(_.pick(companyAttributes, 'name', 'description', 'country', 
			'address', 'contact_number', 'email', "photo_url"), {
			timestampCreated: new Date().getTime()
		});

		var companyId = Company.insert(company);

	    return companyId;
	},

	addPhoto: function(companyId, url) {
		Company.update({_id: companyId}, {
			$push : {photo_url: url}
		});
	}

});