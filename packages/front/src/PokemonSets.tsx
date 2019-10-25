import * as React from 'react';
import {GetSets} from './ModelPokemon';
import {Card} from 'react-bootstrap';


type PokemonSetS= {
    sets: Array<GetSets>
}

export class PokemonSets extends React.Component<any,PokemonSetS> {
    constructor(props:any){
        super(props);
        this.state= {
            sets: []
        }
        this.getSets = this.getSets.bind(this)
    }

    public getSets(){
        return fetch(`https://api.pokemontcg.io/v1/sets`)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                sets: resp.sets       
            })
            console.log(resp)
        })
    }

    componentDidMount(){
        this.getSets()
    }

    render(){

        return(
            <div>
                
                    <div className="pokemonSets">
                        {this.state.sets.map((sets:any, key)=> {
                            return <div className="pokemonSets--cardBox" key={sets.name}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={`${sets.logoUrl}`} />
                                   
                                    <Card.Subtitle className="mb-2 text-muted">{sets.name}</Card.Subtitle>
                                    <Card.Text>{sets.releaseDate}</Card.Text>
                                    <Card.Text>{(sets.standardLegal === true)? "Standard Legal": ""}</Card.Text>
                                    <Card.Text>{(sets.expandedLegal === true)? "Expanded Legal": ""}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        })}
                       
                    </div>
                
            </div>
        )
    }
}
export default PokemonSets