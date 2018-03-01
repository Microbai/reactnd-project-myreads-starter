import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './searchPage'
import BookShelf from './bookshelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: {
      CurrentlyReading: [],
      WantToRead: [],
      Read: []
    },
    searchBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      this.setState((state) => ({
        shelfs: {
          CurrentlyReading: state.books.filter((book) => (book.shelf === 'currentlyReading')),
          WantToRead: state.books.filter((book) => (book.shelf === 'wantToRead')),
          Read: state.books.filter((book) => (book.shelf === 'read'))
        }
      }))
    })
  }

  SearchQuery = (query) => {
    BooksAPI.search(query).then(books => {
      if (Array.isArray(books)) {
        this.setState(state => ({searchBooks: books}))
      } else {
        this.setState({searchBooks: []});
      }
    })
  }
  ChangeShelf = (event, book) => {
    BooksAPI.update(book, event.target.value).then(result => {
      BooksAPI.getAll().then(books => {
        this.setState({books})
        this.setState((state) => ({
          shelfs: {
            CurrentlyReading: state.books.filter((book) => (book.shelf === 'currentlyReading')),
            WantToRead: state.books.filter((book) => (book.shelf === 'wantToRead')),
            Read: state.books.filter((book) => (book.shelf === 'read'))
          }
        }))
      });
    });

  };
  render() {
    return (<div className="app">
      <Route path='/search' render={() => (<SearchPage onSearch={(query) => {
            this.SearchQuery(query)
          }} SearchBooks={this.state.searchBooks} onChangeShelf={this.ChangeShelf} shelfBooks={this.state.books}/>)}/>
      <Route exact="exact" path='/' render={() => (<BookShelf Shelfs={this.state.shelfs} onChangeShelf={this.ChangeShelf}/>)}/>
    </div>)
  }
}

export default BooksApp
