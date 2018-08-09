import React, {Component} from 'react'
// import * as  BooksAPI from '../BooksAPI'

export default class BookSelect extends Component{


	handleShelf = event =>{
		this.props.moveBook(this.props.book_data.id, event.target.value)
	}
	
	render(){
		let options = [
			{label: "Currently Reading", shelfKey: "currentlyReading"},
			{label: "Want to Read", shelfKey: "wantToRead"},
			{label: "Read", shelfKey: 'read'},
			{label: "None", shelfKey: 'none'},
		]


		return (
			<div className="book-shelf-changer">
				<select
					defaultValue={this.props.book_data.shelf ? this.props.book_data.shelf : 'none'}
					onChange={this.handleShelf}
				>
					<option disabled>Move to...</option>
					{options.map((option, index) => <option value={option.shelfKey} key={index}>{option.label}</option>)}
				</select>
			</div>
		)
	}
}