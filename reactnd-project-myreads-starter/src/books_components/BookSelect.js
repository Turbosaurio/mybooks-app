import React, {Component} from 'react'
// import * as  BooksAPI from '../BooksAPI'

export default class BookSelect extends Component{
	updateBook(bookData, key){
		this.props.moveBook(bookData, key);
	}

	render(){
		let {moveBook} = this.props
		let {id, shelf} = this.props.book_data
		let options = [
			{label: "Currently Reading", shelfKey: "currentlyReading"},
			{label: "Want to Read", shelfKey: "wantToRead"},
			{label: "Read", shelfKey: "read"},
			{label: "None", shelfKey: "none"},
		]
		return (
			<div className="book-shelf-changer">
				<select>
					<option disabled>Move to...</option>
					{options.map((option, index) => {
						if(shelf === option.shelfKey){
							return <option className="current-book" key={index} disabled>&#9755; Already {option.label}</option>
						} else {
							return <option key={index} onClick={()=> moveBook(id, option.shelfKey) }>{option.label}</option>
						}
					})}
				</select>
			</div>
		)
	}
}