import './style/main.scss';
import React from 'react'; // use jsx
import ReactDom from 'react-dom'; //  render jsx

var wat = {};

wat = {...wat, name: 'cool'};

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className='hello-navbar'> 
        <h1> counter </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'hello world',
      count: 0,
    };

    this.lulwat = 'cool';

    // force handle click to use the current instances context
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    console.log('event', e);

    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  render(){
    return (
      <div>
        <Navbar />
        <p onClick={this.handleClick}> counter: {this.state.count} </p>
        <p> {this.lulwat} </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));


