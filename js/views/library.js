var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',
	initialize: function(initialBooks) {
		this.collection = new app.Library( initialBooks );
		this.render();
		this.listenTo(this.collection, 'add', this.renderBook);
		this.collection.fetch(); //fetch data from local storage
	},

	events: {
		'click #add': "addBook"
	},

	addBook: function(e){
		e.preventDefault();

		var newBook = {};

		$('#addBook').children('input').each( function(i, el) {
			if( $(el).val() != '' ){
				newBook[ el.id ] = $( el ).val();
			}
		});
		console.log(newBook);
		// this.collection.add(new app.Book(newBook));
		this.collection.create(newBook);

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