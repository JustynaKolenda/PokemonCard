import * as React from 'react';
import {GetSets} from './ModelPokemon';
import {Card} from 'react-bootstrap';
import {GetList} from './ModelPokemon';
import {getCard} from './conector';


type PokemonSetS= {
    sets: Array<GetSets>,
    cards: Array<GetList>
}

export class PokemonSets extends React.Component<any,PokemonSetS> {
    constructor(props:any){
        super(props);
        this.state= {
            sets: [],
            cards: []
        }
        this.getSets = this.getSets.bind(this);
        this.getCardForSets = this.getCardForSets.bind(this)
    }

    public getSets(){
        return fetch(`https://api.pokemontcg.io/v1/sets`)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                sets: resp.sets       
            })
        })
    }

    public getCardForSets(){
        getCard().then(resp => {
            this.setState({
                cards: resp.cards       
            })
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
                        <div className="pokemonSets--card"  onClick={this.getCardForSets} >
                            <Card.Body>
                                <Card.Img className="pokemonSets--logoSets" variant="top" src={`${sets.logoUrl}`} />                               
                                <Card.Subtitle className="mb-2 text-muted">{sets.name}</Card.Subtitle>
                                <Card.Text>{sets.releaseDate}</Card.Text>
                                <Card.Text>{(sets.standardLegal === true)? "Standard Legal": ""}</Card.Text>
                                <Card.Text>{(sets.expandedLegal === true)? "Expanded Legal": ""}</Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                    })}   
                </div>
            </div>
        )
    }
}
export default PokemonSets