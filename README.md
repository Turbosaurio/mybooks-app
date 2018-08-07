# mybooks-app

## Udacity react project
The app displays on the main page 3 shelves with the categories "currently reading", "want to read" and "read", it fetches an array of book with one of these values on the "shelf" key, each book on the shelf has a dropdown menu that changes the "shelf" key value to one of the previous three except on the one it currently is or change and an additional "none" which is stored in an array of shelf-less books. The shelfless books are used on a feature that allows the user to search, the list of books that are displayed once the search input has some value also have the feature of changing keys on each book and once going back (closing the search section) the shelves will display the books that had their shelf updated.

Components use a class type in case a state is needed, only the search has a class type, the rest of the components are stateless functions, there is one function on the App that updates the state wether is the book list for the shelves or the filtered one for the search. Map functions are used on any of the books lists used on main page or search page.


## How to start
Run from /reactnd-project-myreads-starter
```
npm install
npm start
```

## Project planning
* BooksApp
	
	1. State with:
		* books fetched array

	2. Book Shelve:
		* BooksList class
			* Book

		1. BookShelve -- Currently reading
		2. BookShelve -- Want to read
		3. BookSehlve -- Already read

	3. Search Form
		* Input
		* Button
		* Filtered book list

	4. Functions
		1. Search book
		2. filtered books list
		3. Move book
		4. Update book

	5. Additional features(sadly none of this were done)
		1. Slick slider for books
		2. Display a single book with full details
		3. Add prop-types
		4. Write own styles with sass
