import{Link, Navlink} from 'react-router-dom'

const Navbar = () => {
    return ( 
    <div className="navbar-fixed">
        <nav className='nav-wrapper grey lighten-5'>
            <Link to='/home' className='brand-logo black-text '><img className='logo' src='http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG5.png'></img></Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li ><Link className='black-text menue' to='/pokemons'>Pokemons</Link></li>
                <li><Link className='black-text menue' to='/types'>Typs</Link></li>
            </ul>
        </nav>

    </div>
        
    

     );
}
 
export default Navbar;