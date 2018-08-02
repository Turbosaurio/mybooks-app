import React from 'react'
import Slider from 'react-slick'
import Book from './Book'



export default function BookList (props) {
	const slickOptions = {
		slidesToShow: 2,
		slidesToScroll: 1,
	}
	const list = props.contents.map((book) =>(
		<div className="slide-book" key={book.id}>
			<Book
				bookId={book.id}
				image={book.imageLinks.thumbnail}
				title={book.title}
				authors={book.authors}
				shelvesNames={props.shelvesNames}
				keyName={props.keyName}
			/>
		</div>
	))

	const books_list = props.slider
		? <Slider {...slickOptions}>{list}</Slider>
		: <ol>{list}</ol>

	return <div className="bookshelf-books">{books_list}</div>
	
}