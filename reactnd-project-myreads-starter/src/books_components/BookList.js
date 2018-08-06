import React from 'react'
import Book from './Book'

export default function BookList (props) {
	let {contents, keyName, shelvesNames, all, moveBook} = props;
	const filtered_list = all === false
		? contents.filter((book) => book.shelf === keyName)
		: contents
	const list = filtered_list.map((book) =>(
		<div className="slide-book" key={book.id}>
			<Book
				book_data={book}
				shelvesNames={shelvesNames}
				moveBook={moveBook}
			/>
		</div>
	))

	return <div className="bookshelf-books"><ol className="books-grid">{list}</ol></div>
	
}