import React from 'react'
import Book from './Book'

export default function BookList (props) {
	let {contents, keyName, shelvesNames, all} = props;
	const filtered_list = all
		? contents.filter((book) => book.shelf === keyName)
		: contents
	const list = filtered_list.map((book) =>(
		<div className="slide-book" key={book.id}>
			<Book
				bookId={book.id}
				image={book.imageLinks.thumbnail}
				title={book.title}
				authors={book.authors}
				shelvesNames={shelvesNames}
				keyName={book.shelf}
			/>
		</div>
	))

	return <div className="bookshelf-books"><ol className="books-grid">{list}</ol></div>
	
}