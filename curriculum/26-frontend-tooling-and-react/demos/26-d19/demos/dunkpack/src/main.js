import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.value = this.props.value;
    this.state.suit = this.props.suit;

    this.increment = this.increment.bind(this)
  }

  increment() {
    let face = this.state.value
    let newVal = undefined
    
    if (face === 'A') {
      newVal = 2
    } else if (face === 'K') {
      newVal = 'A'
    } else if (face === 'Q') {
      newVal = 'K'
    } else if (face === 'J') {
      newVal = 'Q'
    } else if (face === 10 || face === '10') {
      newVal = 'J'
    } else {
      // state.value comes as a string through props so we have to manually
      // parse it as an int in order to get it to increase, rather than append.
      newVal = parseInt(face, 10) + 1
    }
    this.setState({value: newVal})
  }
  
  suit() {
    const unicodeSuitChars = {
      spades: '♠',
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
    }
    return unicodeSuitChars[this.state.suit];
  }

  render() {
    return (<div className={'card ' + this.props.suit} onClick={this.increment}>
      <div className="top-left">{this.state.value}{this.suit()}</div>
      <div className="bot-right">{this.state.value}{this.suit()}</div>
    </div>)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Card value="A" suit="hearts" />
        <Card value="2" suit="spades" />
        <Card value="7" suit="clubs" />
        <Card value="8" suit="diamonds" />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
