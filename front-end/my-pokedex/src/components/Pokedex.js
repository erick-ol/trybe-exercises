import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const {arrayPokemons} = this.props;
    return (
      <main className="pokemon_list">
        {arrayPokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </main>
    );
  }
}

export default Pokedex;
