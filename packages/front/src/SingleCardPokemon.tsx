import * as React from 'react';
import {GetSinglePokemon} from './ModelPokemon';
import {Card} from 'react-bootstrap';

type SinglePokemonS = {
    pokemon: GetSinglePokemon,
}

export class SingleCardPokemon extends React.Component <any,SinglePokemonS> {
    constructor(props:any){
        super(props);
        this.state= {
            pokemon: {
                id: '',
                name: '',
                nationalPokedexNumber: 0,
                imageUrl: '',
                imageUrlHiRes: '',
                types: [],
                supertype: '',
                subtype: '',
                hp: 0,
                retreatCost: [],
                convertedRetreatCost: 0,
                number: 0,
                artist: '',
                rarity: '',
                series: '',
                set: '',
                setCode: '',
                attacks: [],
                resistances: [],
                weaknesses: []
            }
        }
        this.getSingleCard = this.getSingleCard.bind(this)
    }  

    public getSingleCard() {
        fetch(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.indexPokemon}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    pokemon: resp.card
                })
                console.log(resp)
            })
    }

    componentDidMount(){
        this.getSingleCard()
    }

    render(){
        const {pokemon} = this.state
        return(
            <div className="singlePoke">
                <img className="singlePoke--imgCard" src={`${pokemon.imageUrl}`} alt=""/>
                <Card className="singlePoke--cardBox">
                    <Card.Body>
                        <Card.Title >{pokemon.name}
                            <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle">{pokemon.supertype} - {pokemon.subtype} 
                            <Card.Subtitle  className="mb-2 text-muted singlePoke--hp">HP {pokemon.hp}<i className="singlePoke--hpTitle"/></Card.Subtitle>
                            </Card.Subtitle>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="singlePoke--cardBox">
                    <Card.Body>
                        <Card.Title className="singlePoke--atacks">{pokemon.attacks.map((atack:any, key)=>{
                            return <div>
                                <div key={atack.name} className="singlePoke--atackName"><i>{atack.cost.map((cost:any)=> {
                                return <span> {cost === 'Colorless'? <i className="singlePoke--atackImg"/> : <i className="singlePoke--atackImgFight"/>}</span>
                            })}</i>
                            {atack.name} <span className="mb-2 text-muted">| {atack.damage}</span>
                                </div>
                            <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle">{atack.text}</Card.Subtitle>
                            </div>
                        })}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SingleCardPokemon