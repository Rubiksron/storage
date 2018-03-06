import React from 'react';

class SearchResultList extends React.Component {
  noResults() {
    return <p>No results.</p>
  }

  listResults() {
    return this.props.results.map((post,i) => {
      return (<p key={i}>
        <a href={post.data.url}>{post.data.title}</a>
      </p>)
    })
  }

  showResults() {
    // posts[0].data.title
    // posts[0].data.url
    return (
      <div id="search-results">
        <p>{this.props.results.length} results.</p>
        {this.listResults()}
      </div>
    )
  }

  render() {
    if (!this.props.hasSearched) {
      return <div/>
    } else if (this.props.loading) {
      return <div>loading...</div>
    } else {
      if (this.props.results.length === 0) {
        return this.noResults()
      } else {
        return this.showResults()
      }
    }
  }
}

export default SearchResultList;
