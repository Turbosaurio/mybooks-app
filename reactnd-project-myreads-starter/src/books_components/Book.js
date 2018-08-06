import React, {Component} from 'react'
import BookSelect from './BookSelect'


export default class Book extends Component{
	render(){
		const {shelvesNames, moveBook} = this.props
		const {id, imageLinks, title, authors, shelf} = this.props.book_data
		let bg_image
		if(imageLinks){
			bg_image = imageLinks.thumbnail
		} else {
			bg_image = "https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png"
		}
		const style = {
			backgroundImage: `url(${bg_image})`,
			width: 128,
			height: 193,
		}
		return(
			<article aria-labelledby={`${id}_name`}>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={style}></div>
						<BookSelect
							options={shelvesNames}
							keyName={shelf}
							moveBook={moveBook}
							book_data={this.props.book_data}
						/>
					</div>
					<h3 className="book-title" id={`${id}_name`}>{title}</h3>
					<div className="book-authors">{authors}</div>
				</div>
			</article>
		)
	}
}