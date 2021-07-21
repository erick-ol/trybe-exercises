import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {pokemon} = this.props;
    const {value, measurementUnit} = pokemon.averageWeight;
    return (
      <div className="pokemon_card">
        <div className="pokemon_info">
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <p>Peso: {value}{measurementUnit}</p>
        </div>
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
    );
  }
}

export default Pokemon;
