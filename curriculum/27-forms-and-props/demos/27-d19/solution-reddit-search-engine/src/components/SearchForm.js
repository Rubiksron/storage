import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddit: '',
      subredditPlaceholder: 'movies',
      maxSearchResults: 20
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeSubreddit = this.handleChangeSubreddit.bind(this)
    this.handleChangeMaxResults = this.handleChangeMaxResults.bind(this)
  }

  handleSubmit(event) {
    // stop the form from refreshing the page
    event.preventDefault()

    // use whatever the user has typed, or the placeholder
    let subreddit = this.state.subreddit || this.state.subredditPlaceholder

    // call the function that was passed to the component.
    this.props.handleSubmit(subreddit, this.state.maxSearchResults)
  }

  handleChangeSubreddit(event) {
    this.setState({subreddit: event.target.value})
  }

  handleChangeMaxResults(event) {
    this.setState({maxSearchResults: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Enter the name of a subreddit to search through. Try something like
          movies, news, SeattleWA or all.
        </p>
        <p>
          r/ <input value={this.state.subreddit} placeholder={this.state.subredditPlaceholder}
          onChange={this.handleChangeSubreddit}></input>
       </p>
        <p>
          max:
          <input value={this.state.maxSearchResults}
                 onChange={this.handleChangeMaxResults}
                 type="number" min="0" max="100"></input>
        </p>
        <p><button type="submit">search</button></p>
      </form>
    )
  }
}

export default SearchForm
