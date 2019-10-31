import * as React from 'react';
import {SingleCardModel} from './ModelPokemon';
import {Card} from 'react-bootstrap';
import {getSingleCardPokemon} from './conector';
require('dotenv').config();


type SinglePokemonS = {
    pokemon: SingleCardModel,
    atackMap: string
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
            },
            atackMap : '',
        }
        this.getSingleCard = this.getSingleCard.bind(this);
        this.printIcon = this.printIcon.bind(this);
    }  

    public getSingleCard() {
        getSingleCardPokemon(this.props.match.params.indexPokemon).then(resp => {
                this.setState({
                    pokemon: resp.card
                })
                console.log(resp)
            })
    }

    public async printIcon(cost:string){
       
        switch(cost) {
            case 'Colorless':
                return <i className="singlePoke--atackImg singlePoke--iconColorless"/>;
            case 'Grass':
                return <i className="singlePoke--atackImg singlePoke--iconGrass"/>;
            case 'Fire':
                return <i className="singlePoke--atackImg singlePoke--iconFire"/>;
            case 'Water':
                return <i className="singlePoke--atackImg singlePoke--iconWater"/>;
            case 'Fighting':
                return <i className="singlePoke--atackImg singlePoke--iconFight"/>;
            case 'Lightning':
                return <i className="singlePoke--atackImg singlePoke--iconLightning"/>;
            case 'Psychic':
                return <i className="singlePoke--atackImg singlePoke--iconPsychic"/>;
            case 'Fairy':
                return <i className="singlePoke--atackImg singlePoke--iconFairy"/>;
            case 'Metal':
                return <i className="singlePoke--atackImg singlePoke--iconMetal"/>;
            case 'Darkness':
                return <i className="singlePoke--atackImg singlePoke--iconDarkness"/>;
            case 'Dragon':
                return <i className="singlePoke--atackImg singlePoke--iconDragon"/>;
            default:
                return <span>N/A</span>
        }
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
                        return <div key={atack.name}>
                                <div className="singlePoke--atackName"><div>{this.printIcon(atack.cost)}</div>
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