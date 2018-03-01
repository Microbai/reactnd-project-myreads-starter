import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './books'

class searchPage extends React.Component {
  static propTypes = {
    SearchBooks: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array.isRequired
  }
  state = {
    classedBook: [],
    query: '',
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    this.props.onSearch(query)
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    const {SearchBooks,shelfBooks} = this.props
    const {query} = this.state

    const classedBook = SearchBooks.map((searchBook) => {
       let book = shelfBooks.filter((book) => (book.id === searchBook.id))

      if (book.length !== 0/* searchBook 存在于传进来的 this.props.shelfBooks （已分类的书） */) {
        searchBook.shelf = book[0].shelf
        // 从 this.props.shelfBooks 里找出和搜索的书一样的书: A
        // 把 searchBook.shelf 值设置为: A.shelf

      } else {
        // 否则就把 searchBook.shelf 值设置为 none
        searchBook.shelf = 'none'
      }
      return searchBook
    })
    let showingSearch = ''
    if (classedBook.length > 0) {
      showingSearch = classedBook.map((book, index) => {
        return (<li key={index}>
          <Books book={book} onChange={this.props.onChangeShelf}/>
        </li>);
      });
    }
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
          }
          <input type='text' placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingSearch}
        </ol>
      </div>
    </div>)
  }
}

export default searchPage
