import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'

import BookShelf from './books_components/BookShelf'
import SearchBook from './books_components/SearchBook'


//console.log(shelvesNames.filter((name) => name.keyName !== 'currentlyReading'))
class BooksApp extends React.Component {

	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		books: [],
	}



	handleCloseSearch = val => {
		this.setState({showSearchPage: val})
	}

	updateBookShelf = (id, shelf) =>{
		let newBooks = this.state.books
		let counter = 0
		for(let book of newBooks){
			if(book.id === id){
				newBooks[counter].shelf = shelf
				BooksAPI.update(book, shelf)
					.then(()=>	this.setState({books: newBooks}))
					.catch((error) => {
						console.log(error)
					})
				break				
			}
			counter++
		}
	}

	updateBookInSearch = (book, shelf) =>{
		BooksAPI.update(book, shelf)
	}

	componentDidMount(){
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books: books,
				}))
			})
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
							moveBook={this.updateBookShelf}
						/>
						<BookShelf 
							bookList={books}
							shelfTitle="Want To Read"
							keyName="wantToRead"
							moveBook={this.updateBookShelf}
						/>
						<BookShelf 
							bookList={books}
							shelfTitle="Read"
							keyName="read"
							moveBook={this.updateBookShelf}
						/>

						<div className="open-search">
							<Link to="/search">Add Abook</Link>
						</div>
					</div>

				)} />
		
				<Route path="/search"
					render={() => (
						<SearchBook moveBook={this.updateBookInSearch}/>
					)}
				/>
				
				{/*
					!this.state.showSearchPage
					? (
						)
					: (
						)
				*/}
			</div>
		)
	}
}

export default BooksApp
