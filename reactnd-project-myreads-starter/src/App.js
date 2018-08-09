import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'

import BookShelf from './books_components/BookShelf'
import SearchBook from './books_components/SearchBook'

// let debounce = require('lodash.debounce');

class BooksApp extends React.Component {
	state = {
		books: [],
		filteredBooks: [],
	}

	updateShelfInState = (id, shelf, stateKey) =>{
		let newBooks = this.state[stateKey]
		let counter = 0
		for(let book of newBooks){
			if(book.id === id){
				newBooks[counter].shelf = shelf
				BooksAPI.update(book, shelf)
					.then((result)=> {
						this.setState({[stateKey]: newBooks})
					})
					.then(()=> {
						console.log(`${book.title} book moved to ${shelf}`)
					})
				break				
			}
			counter++
		}
	}

	updateBookInShelf = (id, shelf) =>{
		this.updateShelfInState(id, shelf, 'books')
	}

	updateBookInSearch = (id, shelf) =>{
		this.updateShelfInState(id, shelf, 'filteredBooks')
		this.updateBooks()
	}

	updateFilteredBooks = query =>{
		if(query !== ''){
			BooksAPI.search(query)
				.then(results => {
					if(results.error !== 'empty query'){
						for(let result of results){
							for(let book of this.state.books){								
								if (result.id === book.id){
									result.shelf = book.shelf
									console.log(`FOUND BOOK ${book.title} IN SHELF: ${book.shelf}`)
								}
							}
						}
						this.setState({filteredBooks: results })
					} else {
						this.setState({filteredBooks: [] })
						console.log('empty query');
					}
				})
		}
	}

	updateBooks(){
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books: books,
				}))
			})
	}

	componentDidMount(){
		this.updateBooks()
	}

	render() {
		let {books, filteredBooks} = this.state
		const shelves = [
			{label: "Currently Reading", shelfKey: "currentlyReading"},
			{label: "Want to Read", shelfKey: "wantToRead"},
			{label: "Read", shelfKey: 'read'},
		]
		return (
			<div className="app">
				<Route exact path="/" render={()=> (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						{
							shelves.map((shelf, index) =>
								<BookShelf 
									key={index}
									bookList={books}
									shelfTitle={shelf.label}
									keyName={shelf.shelfKey}
									moveBook={this.updateBookInShelf}
								/>
							)
						}
						<div className="open-search">
							<Link to="/search">Add Abook</Link>
						</div>
					</div>
				)} />
		
				<Route path="/search"
					render={() => (
						<SearchBook
							updateFilteredBooks={this.updateFilteredBooks}
							bookList={filteredBooks}
							moveBook={this.updateBookInSearch}
						/>
					)}
				/>
			</div>
		)
	}
}


BooksApp.propTypes = {
	books: PropTypes.array,
	filteredBooks: PropTypes.array
}
export default BooksApp
