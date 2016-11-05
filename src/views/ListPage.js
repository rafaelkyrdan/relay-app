import React from 'react'
import classes from './ListPage.css'
import Relay from 'react-relay'
import PokemonPreview from '../components/PokemonPreview'

class ListPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }
  render () {
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          {`There are ${this.props.viewer.allPokemons.edges.length} Pokemons in your pokedex`}
        </div>
        <div className={classes.container}>
          {this.props.viewer.allPokemons.edges.map((edge) => edge.node).map((pokemon) =>
            <PokemonPreview key={pokemon.id} pokemon={pokemon} />
          )
          }
        </div>
      </div>
    )
  }
}

export default Relay.createContainer(
  ListPage,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          allPokemons (first: 100000) {
            edges {
              node {
                ${PokemonPreview.getFragment('pokemon')}
                id
              }
            }
          }
          id
        }
      `,
    },
  },
)
