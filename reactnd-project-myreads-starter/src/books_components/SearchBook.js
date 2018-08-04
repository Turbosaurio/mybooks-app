import React, {Component} from 'react'

import * as BooksAPI from  '../BooksAPI'
import BookList from './BookList'
import Book from './Book'

export default class SearchBook extends Component{
	state = {
		search: '',
		filteredList : []
	}

	handleChange = event => {
		const filterKeys = ['title', 'authors']
		let query = event.target.value
		let {bookList} = this.props
		this.setState({search: query})
		let filtered = bookList.filter( (c) => 
			c.authors.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
			c.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
		)
		this.setState({filteredList: filtered })
	};
	componentDidMount(){
	BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					filteredList: books,
				}))
			})
	}

	render(){
		let {filteredList} = this.state
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={() => {
							this.props.onClose(false)
							console.log('close')
						}}>Close</a>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.search}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="book-search-list">
					<BookList contents={filteredList} keyName="none" shelvesNames={this.props.shelvesNames}/>
				</div>
			</div>
		)
	}
}