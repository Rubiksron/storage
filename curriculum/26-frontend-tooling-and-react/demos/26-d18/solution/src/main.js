import './styles/main.scss'

import React from 'react'
import faker from 'faker'
import cowsay from 'cowsay-browser'
import ReactDom from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      current: '',
      content: cowsay.say({text: 'click the button...'}),
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = cows[0]
      this.setState({cows, current})
    })
  }

  handleClick(e) {
    let current = e.target.value
    let text = faker.random.words(4)
    this.setState({current, content: cowsay.say({text, f: current})})
  }

  render() {
    return (
      <div className="application">
        <h1>Welcome to cowville!</h1>
        <select onChange={this.handleClick}>
          {this.state.cows.map((cow, i) => {
            return <option value={cow} key={i}>{cow}</option>
          })}
        </select>
        <button onClick={this.handleClick}>click for cows</button> 
        <pre>
          <code>
            {this.state.content}
          </code>
        </pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))