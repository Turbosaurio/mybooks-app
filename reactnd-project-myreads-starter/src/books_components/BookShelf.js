import React from 'react'
import BookList from './BookList'

export default function BookShelf (props){
	let {shelfTitle, bookList, keyName, shelvesNames, moveBook} = props
	return(
		<div className="list-books-content">
			<div>
				<section className="bookshelf" aria-labelledby={`${keyName}_header`}>
					<h2 id={`${keyName}_header`} className="bookshelf-title">{shelfTitle}</h2>
					<BookList
						contents={bookList}
						keyName={keyName}
						shelvesNames={shelvesNames}
						all={false}
						moveBook={moveBook}
					/>
				</section>
			</div>
		</div>
	)
}