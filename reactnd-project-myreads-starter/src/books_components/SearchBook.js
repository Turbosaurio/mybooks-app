import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookList from './BookList'
import debounce from 'lodash.debounce'

export default class SearchBook extends Component{
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.emitChangeDebounced = debounce(this.emitChange, 250);
		this.state = {
			search: '',
		}
	}

	handleChange = event => {
		this.setState({search: event.target.value})
		this.emitChangeDebounced(this.state.search)
	}

	emitChange(value) {
		this.props.updateFilteredBooks(value)
	}

	componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

	render(){
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
				{this.state.search !== '' && this.props.bookList
					?(
					 	<ol className="books-grid">
					 	{
				 			<BookList
				 				contents={this.props.bookList}
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