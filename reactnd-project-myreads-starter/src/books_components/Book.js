import React from 'react'
import BookSelect from './BookSelect'


export default function Book(props){
	let {image, title, authors, bookId} = props
	let style = {
		backgroundImage: `url(${image})`,
		width: 128,
		height: 193,
	}
	let options = [
		"Move to...",
		"Currently Reading",
		"Want to read",
		"Read",
		"None"
	]
	return(
		<article aria-labelledby={`${bookId}_name`}>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={style}></div>
					<BookSelect options={options}/>
				</div>
				<h3 className="book-title" id={`${bookId}_name`}>{title}</h3>
				<div className="book-authors">{authors}</div>
			</div>
		</article>
	)
}