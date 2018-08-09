import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default function BookList (props) {
	const {contents, keyName, shelvesNames, all, moveBook} = props;
	let filtered_list = []
	if(all === false && keyName){
		filtered_list = contents.filter((book) => book.shelf === keyName)
	} else {
		filtered_list = contents
	}
	let list = filtered_list.map((book) =>(
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

BookList.propTypes = {
	contents : PropTypes.array
}