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
                // console.log(res)
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
                        <div className='card center' key={Math.random()}>
                            <div className="card-content  hoverable">
                            <Link to='/pokemonDetail'><span className="card-title menue">{pokemon.name}</span></Link>
                            </div>
                         </div>
                    </div>
             
                )
            })
        ):(
            <div className='center'>
                 <div class="preloader-wrapper big active">
                 <div class="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                 </div>

            </div>
        )

        return(
            <div>
                <h1>{pokemonList}</h1>
            </div>
        )
    }
}
 
export default Pokemons;