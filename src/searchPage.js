import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './books'

class searchPage extends React.Component {
  static propTypes = {
    SearchBooks: PropTypes.array.isRequired,
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    this.props.onSearch(query)
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    const {SearchBooks} = this.props
    const {query} = this.state
    let showingSearch = ''
    if (SearchBooks.length > 0) {
      showingSearch=SearchBooks.map((book, index) => {
          return (
              <li key={index}>
                  <Books book={book} onChange={this.props.onChangeShelf}/>
              </li>
          );
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
