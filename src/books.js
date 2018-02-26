import React, {Component, props} from 'react';
import ReactDOM from 'react-dom'

class Books extends Component {

  render() {
    return (
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
                        }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled="disabled">Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.authors.map(author => <div className="book-authors">{author}</div>)}

                  </div>
              )
  }

}

export default Books
