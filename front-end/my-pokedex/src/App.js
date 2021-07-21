import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex.js'

function App() {
  return (
    <Pokedex arrayPokemons={pokemons} />
  );
}

export default App;
