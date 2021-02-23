import { Link } from 'react-router-dom';


const PokemonList = ({items,isLoading}) => {


    return ( 
        isLoading ?(
        <div className='center'>
            <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>
            </div>
        
        </div>):(
        <div className="pokemonList">
            {items.map((pokemon)=>(
                <div className="container">
                    <div className='card center' key={Math.floor(Math.random()*500)} >
                        <div className="card-content  hoverable" >
                        <Link to={'/pokemonDetail/'} pokemon={pokemon.url}><span className="card-title menue">{pokemon.name}</span></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>)

        
        
     );
}
 
export default PokemonList;