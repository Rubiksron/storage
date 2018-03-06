import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'

const API_URL = 'https://pokeapi.co/api/v2'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log('__FORM_PROPS__', this.props)
    console.log('__FORM_STATE__', this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.pokemonSelect(this.state.pokeName)
  }

  handleChange(e) {
    this.setState({pokeName: e.target.value})
  }

  render() {
    return (
      <form 
        className="pokemon-form"
        onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="pokemonName"
          placeholder="search for a pokemon"
          value={this.state.pokeName}
          onChange={this.handleChange}/>
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonLookup: {},
      pokemonSelected: null,
      pokemonNameError: null,
    }
    this.pokemonSelect = this.pokemonSelect.bind(this)
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  componentDidMount() {
    if(localStorage.pokemonLookup) {
      try {
        let pokemonLookup = JSON.parse(localStorage.pokemonLookup)
        this.setState({pokemonLookup})
      } catch(e) {
        console.error(e)
      }
    } else {
      superagent.get(`${API_URL}/pokemon/`)
      .then(res => {
        let pokemonLookup = res.body.results.reduce((lookup, n) => {
          lookup[n.name] = n.url
          return lookup
        }, {})

        try {
          localStorage.pokemonLookup = JSON.stringify(pokemonLookup)
          this.setState({pokemonLookup})
        } catch(e) {
          console.error(e)
        }
      })
      .catch(console.error)
    }
  }

  pokemonSelect(name) {
    if(!this.state.pokemonLookup[name]) {
      this.setState({
        pokemonSelected: null,
        pokemonNameError: name,
      })
    } else {
      console.log(this.state.pokemonLookup[name])
      superagent.get(this.state.pokemonLookup[name])
      .then(res => {
        this.setState({
          pokemonSelected: res.body,
          pokemonNameError: null,
        })
      })
      .catch(console.error)
    }
  }

  render() {
    return (
      <section className="application">
        <h1>Pokemon Form Demo</h1>
        <PokemonForm pokemonSelect={this.pokemonSelect}/>

        {this.state.pokemonNameError ?
          <div>
            <h2>Selected: {this.state.pokemonSelected} does not exist</h2>
            <h3>Please make another request</h3>
          </div> :
          <div>
            { this.state.pokemonSelected ?
              <div>
                <section className="pokemon selected">
                  <h2>Selected: {this.state.pokemonSelected.name}</h2>
                  <img src={this.state.pokemonSelected.sprites.front_default} alt={this.state.pokemonSelected.name}/>
                </section>
                <section className="pokemon abilities">
                  <h3>Abilities</h3>
                  <ul>
                    {this.state.pokemonSelected.abilities.map((item, i) => {
                      return <li key={i}>{item.ability.name}</li>
                    })}
                  </ul>
                </section>
              </div> :
              <div>
                <p>Please make a request to see pokemon data</p>
              </div>
            }
          </div>
        }
      </section>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))