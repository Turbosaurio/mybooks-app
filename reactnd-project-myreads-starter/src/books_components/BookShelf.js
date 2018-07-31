import React from 'react'
import BookList from './BookList'

export default function BookShelf (props){
	let {shelfTitle, bookList, ariaTitle} = props
	return(
		<div className="list-books-content">
			<div>
				<section className="bookshelf" aria-labelledby={`${ariaTitle}_header`}>
					<h2 id={`${ariaTitle}_header`} className="bookshelf-title">{shelfTitle}</h2>
						<BookList contents={bookList}/>
				</section>
			</div>
		</div>
	)
}