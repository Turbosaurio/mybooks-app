import React, {Component} from 'react'
import BookSelect from './BookSelect'


export default class Book extends Component{
	render(){
		let {image, title, authors, bookId, keyName, shelvesNames} = this.props
		let style = {
			backgroundImage: `url(${image})`,
			width: 128,
			height: 193,
		}
		return(
			<article aria-labelledby={`${bookId}_name`}>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={style}></div>
						<BookSelect options={shelvesNames.filter((name) => name.keyName !== keyName )}/>
					</div>
					<h3 className="book-title" id={`${bookId}_name`}>{title}</h3>
					<div className="book-authors">{authors}</div>
				</div>
			</article>
		)
	}
}