import React from 'react'
import Slider from 'react-slick'
import Book from './Book'



export default function BookList (props) {
	const slickOptions = {
		slidesToShow: 2,
		slidesToScroll: 1,
	}
	return (
		<div className="bookshelf-books">
			<Slider {...slickOptions}>
				{props.contents.map((book) =>(
					<div className="slide-book" key={book.id}>
						<Book
							bookId={book.id}
							image={book.imageLinks.thumbnail}
							title={book.title}
							authors={book.authors}
						/>
					</div>
				))}
			</Slider>
			
		</div>
		)
}