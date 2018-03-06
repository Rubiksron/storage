import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor() {
    super();
    this.state = {content: 'heeeelllooo', cows: []};

    this.generateText = this.generateText.bind(this);
    this.setCow = this.setCow.bind(this);
  }

  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = 'stegosaurus'
      this.setState({cows, current})
    });
  }

  generateText() {
    let cow = this.state.current || 'moofasa';
    let cowSaid = cowsay.say({text: faker.random.words(4), f: cow});
    this.setState({content: cowSaid})
  }

  setCow(e) {
    this.setState({current: e.target.value})
  }

  cows() {
    return this.state.cows.map((cow, index) => {
      return <option value={cow} key={index}>{cow}</option>
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Generate Cowsay Lorem</h1>
        </header>
        <p className="App-intro">
          <select onChange={this.setCow}>
            <option>choose a cow</option>
            {this.cows()}
          </select>
          <button onClick={this.generateText}>then click me!</button>
        </p>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
