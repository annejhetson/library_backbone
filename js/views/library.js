var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',
	initialize: function(initialBooks) {
		this.collection = new app.Library( initialBooks );
		this.render();
	},

	//render each book in initial book collection
	render: function(){
		this.collection.each(function(book) {
			this.renderBook( book );
		}, this );
	},

	//create a book view for each book
	renderBook: function(book) {
		var bookView = new app.BookView({ model: book});
		this.$el.append( bookView.render().el );
	}
});