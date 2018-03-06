import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSearched: false,
      loading: false,
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reddit Subreddit Search Engine</h1>
        </header>
        <div id="content">
          <SearchForm handleSubmit={this.handleSubmit}></SearchForm>
          <SearchResultList results={this.state.results}
            hasSearched={this.state.hasSearched}
            loading={this.state.loading}>
          </SearchResultList>
        </div>
      </div>
    );
  }

  handleSubmit(subreddit, limit) {
    // mark that a search has happened
    this.setState({hasSearched: true});
    this.setState({loading: true});

    // for some reason searching like "limit 20" returns 21 results.
    // subtract one from limit to account for this odd behavior.
    limit -= 1

    let url = `http://www.reddit.com/r/${subreddit}.json?limit=${limit}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      let posts = json.data.children
      console.log(posts)
      this.setState({results: posts})
      this.setState({loading: false});
    })
    .catch(()=> {
      this.setState({results: []})
      this.setState({loading: false});
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));