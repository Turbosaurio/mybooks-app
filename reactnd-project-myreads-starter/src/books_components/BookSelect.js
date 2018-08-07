import React from 'react'
// import * as  BooksAPI from '../BooksAPI'

export default function BookSelect (props){
	let {moveBook} = props
	let {id, shelf} = props.book_data
	let options = [
		{label: "Currently Reading", shelfKey: "currentlyReading"},
		{label: "Want to Read", shelfKey: "wantToRead"},
		{label: "Read", shelfKey: "read"},
		{label: "None", shelfKey: "none"},
	]
	return (
		<div className="book-shelf-changer">
			<select defaultValue={() => {
				for(let option of options){
					if(option.shelfKey === shelf){
						return option.shelfKey
					}
				}
			}}>
				<option disabled>Move to...</option>
				{options.map((option, index) => {
					if(shelf === option.shelfKey){
						return <option key={index}>&#9755; Already {option.label}</option>
					} else {
						return <option key={index} onClick={()=> moveBook(id, option.shelfKey) }>{option.label}</option>
					}
				})}
			</select>
		</div>
	)
}