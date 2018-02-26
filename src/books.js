import React, {Component} from 'react';

class Books extends Component {

  render() {
    let bookImageUrl = ''
    if(this.props.book.imageLinks!==undefined  && this.props.book.imageLinks.thumbnail!==undefined){
        bookImageUrl=this.props.book.imageLinks.thumbnail;
    }
    if (this.props.book.shelf === undefined){
      this.props.book.shelf = "none"
    }
    return (
                  <div className="book">

                    <div className="book-top">

                      <div className="book-cover" style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url("${bookImageUrl}")`
                        }}></div>
                      <div className="book-shelf-changer">
                        <select value={this.props.book.shelf} onChange={(event)=>{this.props.onChange(event, this.props.book)}} >
                          <option value="none" disabled="disabled">Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.shelf}
                    <div className="book-authors">{(this.props.book.authors!==undefined && this.props.book.authors.length>0)? this.props.book.authors.map((author, index)=> author + " "): ""}</div>

                  </div>
              )
  }

}

export default Books
