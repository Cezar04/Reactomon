import {Component} from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokemonList from './PokemonList';



// class Pokemons extends Component {
//     state ={
//         pokemons:[]
//     }
//     componentDidMount(){
//         axios.get('https://pokeapi.co/api/v2/pokemon')
//             .then(res=>{
//                 this.setState({
//                     pokemons:res.data.results
                  
//                 })
//             })
//     }

//     render(){
//         const {pokemons} = this.state;
//         let id= Math.floor(Math.random()*500);
//         console.log(id)
//         const pokemonList = pokemons.length ? (
//             pokemons.map(pokemon =>{
//                 return(
//                     <div className="container">
//                         <div className='card center' key={id} >
//                             <div className="card-content  hoverable" >
//                             <Link to='/pokemonDetail'><span className="card-title menue">{pokemon.name}</span></Link>
//                             </div>
//                          </div>
//                     </div>
             
//                 )
//             })
//         ):(
//             <div className='center'>
//                  <div className="preloader-wrapper big active">
//                  <div className="spinner-layer spinner-blue">
//                         <div className="circle-clipper left">
//                         <div className="circle"></div>
//                         </div><div className="gap-patch">
//                         <div className="circle"></div>
//                         </div><div className="circle-clipper right">
//                         <div className="circle"></div>
//                         </div>
//                     </div>
//                  </div>

//             </div>
//         )

//         return(
//             <div>
//                 <h1>{pokemonList}</h1>
//             </div>
//         )
//     }
// }
 
// export default Pokemons;

const Pokemons = () => {
    const [items, setItems]= useState([])
    const [isLoading, setIsLoading]=useState(true)
    const ceva= (data)=>{
        data.forEach(item => {
            console.log(item.url)
        });
    }
    
    useEffect(()=>{
        const fetchItems=async()=>{
            const result= await axios(`https://pokeapi.co/api/v2/pokemon`)
            console.log(ceva(result.data.results))
         
            setItems(result.data.results)
            setIsLoading(false)
        }
      
        fetchItems()

    },[])

    return ( 
        <div>
            <PokemonList isLoading={isLoading} items={items} />
        </div>
     );
}
 
export default Pokemons;