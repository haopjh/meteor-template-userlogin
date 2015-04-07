Company = new Meteor.Collection('company');

Meteor.methods({
	newCompany: function(companyAttributes){
		

		var company = _.extend(_.pick(companyAttributes, 'name', 'description', 'country', 
			'address', 'contact_number', 'email'), {
			timestampCreated: new Date().getTime()
		});

		var companyId = Company.insert(company);

	    return companyId;
	}

});