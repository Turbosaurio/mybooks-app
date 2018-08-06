import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from  '../BooksAPI'
import BookList from './BookList'

export default class SearchBook extends Component{
	state = {
		search: '',
		filteredBooks: []
	}

	handleChange = event => {
		this.setState({search: event.target.value})
		if (this.state.search !== ''){
			BooksAPI.search(this.state.search).then(results => {
				this.setState({filteredBooks: results})
			})
		}
	}

	render(){
		let {filteredBooks} = this.state
		return(
			<section className="search-books" aria-label="Search for book">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
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
				 
				{this.state.search !== '' && this.state.filteredBooks.length > 0
					?(
					 	<ol className="books-grid">
					 	{
				 			<BookList
				 				contents={filteredBooks}
				 				keyName={'all'}
				 				shelvesNames={this.props.shelvesNames}
				 				moveBook={this.props.moveBook}
				 			/>					 		
					 	}
					 	</ol>
					):(
						<div className="search-results-empty"> No Results </div>
					)
				}
				</div>
			</section>
		)
	}
}