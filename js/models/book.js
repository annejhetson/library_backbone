var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/images.jpeg',
		title: 'No title',
		author: 'Unknown',
		releaseDate: new Date(),
		keywords: 'none'
	}
});