import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
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
					.then((result)=> this.setState({[stateKey]: newBooks}))
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
				.then(results =>{
					this.setState({filteredBooks: results })
				})
				.catch((body) => {
					console.log(body)
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
		let {books} = this.state
		return (
			<div className="app">
				<Route exact path="/" render={()=> (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<BookShelf 
							bookList={books}
							shelfTitle="Currently Reading"
							keyName="currentlyReading"
							moveBook={this.updateBookInShelf}
						/>
						<BookShelf 
							bookList={books}
							shelfTitle="Want To Read"
							keyName="wantToRead"
							moveBook={this.updateBookInShelf}
						/>
						<BookShelf 
							bookList={books}
							shelfTitle="Read"
							keyName="read"
							moveBook={this.updateBookInShelf}
						/>
						<div className="open-search">
							<Link to="/search">Add Abook</Link>
						</div>
					</div>
				)} />
		
				<Route path="/search"
					render={() => (
						<SearchBook
							updateFilteredBooks={this.updateFilteredBooks}
							bookList={this.state.filteredBooks}
							moveBook={this.updateBookInSearch}
						/>
					)}
				/>
			</div>
		)
	}
}

export default BooksApp
