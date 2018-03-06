import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'

const API_URL = 'http://www.reddit.com/r'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 10,
      board: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBoardChange = this.handleBoardChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
  }

  componentDidUpdate() {
    console.log('__PROPS__', this.props)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.searchSubReddit(this.state.board, this.state.limit)
  }

  handleBoardChange(e) {
    this.setState({board: e.target.value})
  }

  handleLimitChange(e) {
    this.setState({limit: e.target.value})
  }

  render() {
    return (
      <form 
        className="search-form"
        onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="board"
          placeholder="search for a redit board"
          value={this.state.board}
          onChange={this.handleBoardChange}/>
       
        <input 
          type="number"
          name="limit"
          min="0"
          max="100"
          placeholder="25"
          value={this.state.limit}
          onChange={this.handleLimitChange}/>

        <button 
          type="submit" 
          className={this.props.searchErr ? "search-form error" : "search-form"}>
            Search
          </button>
      </form>
    )
  }
}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="result-list">
        {this.props.results ?
          <ul>
            {this.props.results.map((item, i) => {
              return (
                <li key={i} className="topic">
                  <a href={item.data.url}>
                    <h2>{item.data.title}</h2>
                  </a>
                  <span>Up-votes: {item.data.ups}</span>
                </li>)
            })}
          </ul> :
          <h2>There are currently no results</h2>
        }
      </section>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      searchError: false,
    }

    this.fetchSubReddit = this.fetchSubReddit.bind(this)
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  fetchSubReddit(subreddit, limit) {
    superagent.get(`${API_URL}/${subreddit}.json?limit=${limit}`)
    .then(res => {
      let sorted = res.body.data.children.sort((a, b) => b.data.ups - a.data.ups)
      this.setState({topics: sorted, searchError: false})
    })
    .catch(err => this.setState({searchError: true}))
  }

  render() {
    return (
      <section className="application">
        <SearchForm searchSubReddit={this.fetchSubReddit} searchErr={this.state.searchError}/>
        <SearchResultList results={this.state.topics}/>
      </section>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))