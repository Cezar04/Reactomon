import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import Types from "./components/Type";
import Pokemons from "./components/Pokemons";
import PokemonDetail from "./components/PokemonDetail";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route path='/home' component={Home} />
        <Route path='/types' component={Types}/>
        <Route path='/pokemons' component={Pokemons}/>
        <Route path='/pokemonDetail' component={PokemonDetail}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
