import {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class Types extends Component {
    state = { 
            types:[]
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res=>{
                console.log(res)
                this.setState({
                    types:res.data.results
                })
            })
    }


    render(){
        const {types}= this.state;
        const typesList= types.length ?(
            types.map(type=>{
                return(
                    <div className="container">
                        <div className='post card center' key={Math.random()}>
                            <div className="card-content  hoverable">
                            <Link to='/pokemonDetail'><span className="card-title menue">{type.name}</span></Link>
                            </div>
                         </div>
                    </div>
                )
            })
        ) :(
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

            </div>
        )
        return ( 
            <h1>{typesList}</h1>
         );
    }

    
}
 
export default Types;