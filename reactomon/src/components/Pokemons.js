import {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Pokemons extends Component {
    state ={
        pokemons:[]
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res=>{
                console.log(res)
                this.setState({
                    pokemons:res.data.results
                  
                })
            })
    }

    render(){
        const {pokemons} = this.state;
        const pokemonList = pokemons.length ? (
            pokemons.map(pokemon =>{
                return(
                    <div className="container">
                        <div className='post card center' key={Math.random()}>
                            <div className="card-content">
                                <span className="card-title"><Link to={pokemon.url}>{pokemon.name}</Link></span>
                            </div>
                         </div>
                    </div>
             
                )
            })
        ):(
            <div className='center'> Loading...</div>
        )

        return(
            <div>
                <h1>{pokemonList}</h1>
            </div>
        )
    }
}
 
export default Pokemons;