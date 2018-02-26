import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './searchPage'
import BookShelf from './bookshelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: {
      CurrentlyReading:[],
      WantToRead:[],
      Read:[]
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      this.setState(
        (state) => ({shelfs:{
          CurrentlyReading:state.books.filter( (book) => (book.shelf === 'currentlyReading')),
          WantToRead:state.books.filter( (book) => (book.shelf === 'wantToRead')),
          Read:state.books.filter( (book) => (book.shelf === 'read'))
        }
        }))
    })

  }
  render() {
    return (<div className="app">
      <Route path='/search' render={() => (<SearchPage/>)}/>
      <Route exact path='/' render={() => (<BookShelf Shelfs={this.state.shelfs}/>)}/>
    </div>)
  }
}

export default BooksApp
