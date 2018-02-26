import React, {Component, props} from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import Books from './books'

class BookShelf extends Component {

  render() {
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>

            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.Shelfs.CurrentlyReading.map(book=>
                    <li>
                      <Books book={book}/>
                    </li>
                  )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.Shelfs.WantToRead.map(book=>
                  <li>
                    <Books book={book}/>
                  </li>
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.Shelfs.Read.map(book=>
                  <li>
                    <Books book={book}/>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>)
  }

}

export default BookShelf
