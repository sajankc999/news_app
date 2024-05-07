import React, { Component } from 'react'

export class NewsItme extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author,source } = this.props;
    return (
      <div className='container my-3'>
        <div className="card h-100" >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {source}

          </span>
          <img src={imageUrl} className="card-img-top" alt='image unavailable' />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Learn more!</a>
            <p> By {author ? author : "Unknown author"}</p>
            <p>{new Date(date).toTimeString()} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItme
