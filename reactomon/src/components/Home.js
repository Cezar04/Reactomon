import{Link} from 'react-router-dom'


const Home = () => {
    

    return ( 
        <div className="home">
            <img className="responsive-img" src="https://wallpapercave.com/wp/38oAVRI.jpg" alt=""/>
            <div className="btn">
                <Link to='/pokemons' className="waves-effect waves-light btn-large click">Pokemons</Link>
                <Link to='/types' className="waves-effect waves-light btn-large click">Typs</Link>
               
            </div>

        </div>
     

        
     );
}
 
export default Home;