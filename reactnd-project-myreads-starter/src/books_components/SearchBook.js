import React, {Component} from 'react'

import * as BooksAPI from  '../BooksAPI'
// import BookList from './BookList'
// import Book from './Book'

export default class SearchBook extends Component{
	state = {
		search: '',
		bookList : []
	}

	handleChange = event => {
		this.setState({ search: event.target.value })
		BooksAPI.search(event.target.value)
			.then((books) => {
				this.setState({bookList: books.id})
			})
	};

	
	

	render(){
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
			</div>
		)
	}
}