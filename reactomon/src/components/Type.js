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
                            <div className="card-content">
                                <span className="card-title"><Link to={type.url}>{type.name}</Link></span>
                            </div>
                         </div>
                    </div>
                )
            })
        ) :(
            <div className="center">Loading...</div>
        )
        return ( 
            <h1>{typesList}</h1>
         );
    }

    
}
 
export default Types;