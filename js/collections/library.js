var app = app || {};

app.Library = Backbone.Collection.extend({ 
	model: app.Book,
	localStorage: new Store("backbone-Library"),
	url: '/books'
 });
