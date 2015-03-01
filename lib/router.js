// Router.configure({
// 	layoutTemplate: 'layout',
// });

// Router.onBeforeAction(function(){
// 	if(!Meteor.loggingIn() && !Meteor.user()) {
// 		console.log("this ran");
// 		Router.go('unauthorized');
// 	}
// },{except: ['unauthorized']});

Router.route('/', function () {
	this.render('signup');
});

Router.route('/home');
Router.route('/route');
Router.route('/createItem');