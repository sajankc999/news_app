import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinnner from './Spinnner';
import PropTypes from 'prop-types'
import NavBar from './NavBar';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 20
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,

    }
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6e01788a09e4bb2af88ee96c76806d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data)
    let parseData = await data.json()
    // this.setState({articles:parseData.articles})
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
  }
  async update() {
    this.setState({ loading: true });
    // this.setState({page:this.state.page-1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6e01788a09e4bb2af88ee96c76806d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, loading: false });
  }
  fetchMoreData = async () => {
    // this.setState({ loading: true });
    this.setState({page:this.state.page+1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
    &category=${this.props.category}
    &apiKey=c6e01788a09e4bb2af88ee96c76806d5
    &page=${this.state.page}
    &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({ articles: this.state.articles.concat(parseData.articles), 
      loading: false, 
       });
  }
  PrevHandler = async () => {
    console.log("prev");

    this.setState({ page: this.state.page - 1 });
    this.update()
  }
  NextHandler = async () => {

    console.log('next');

    this.setState({ page: this.state.page + 1 })
    this.update()

  }
  render() {

    return (
      <>
        <NavBar />
        <div className="container">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinnner />}
        >
          <div className="text-center"><h2>Todays News</h2></div>
          {/* {this.state.loading && <Spinnner />}   */}
          <div className="container my-2">
            <div className="row" >
              {this.state.articles.map((element) => {
                return <div className="col-md-3" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : "NO Title"}
                    description={element.description ? element.description.slice(0, 88) : "NO Description"}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name} />
                </div>
              })}
            </div>
            {/* {!this.hasMore?<span className='my-3 mx-2 tex-center'>YOU'RE CAUGHT UP</span>:""} */}
            {/* <div className="d-flex jtify-content-between">
            <div disabled={this.state.page <= 1} className="btn btn-info" onClick={this.PrevHandler} >Previo</div>
            <div disabled={this.state.page + 1 > Math.ceil(this.props.totalResults / this.props.pageSize)} className="btn btn-info" onClick={this.NextHandler}>Next</div>
          </div> */}
          </div>
          
        </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News
