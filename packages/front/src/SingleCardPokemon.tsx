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
            })
    }

    public async printIcon(cost:string){
        switch(cost) {
            case 'Colorless':
                return <span className="singlePoke--atackImg singlePoke--iconColorless"/>;
            case 'Grass':
                return <span className="singlePoke--atackImg singlePoke--iconGrass"/>;
            case 'Fire':
                return <span className="singlePoke--atackImg singlePoke--iconFire"/>;
            case 'Water':
                return <span className="singlePoke--atackImg singlePoke--iconWater"/>;
            case 'Fighting':
                return <span className="singlePoke--atackImg singlePoke--iconFight"/>;
            case 'Lightning':
                return <span className="singlePoke--atackImg singlePoke--iconLightning"/>;
            case 'Psychic':
                return <span className="singlePoke--atackImg singlePoke--iconPsychic"/>;
            case 'Fairy':
                return <span className="singlePoke--atackImg singlePoke--iconFairy"/>;
            case 'Metal':
                return <span className="singlePoke--atackImg singlePoke--iconMetal"/>;
            case 'Darkness':
                return <span className="singlePoke--atackImg singlePoke--iconDarkness"/>;
            case 'Dragon':
                return <span className="singlePoke--atackImg singlePoke--iconDragon"/>;
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
                        <Card.Title className="singlePoke--atacks">{pokemon.attacks.map((atack:any)=>{
                        return <div className="singlePoke--marBottom" key={atack.name}>
                                {/* <div className="singlePoke--atackName"><div>{this.printIcon(atack.cost)}</div> */}
                                <div className="singlePoke--atackName">
                                    {atack.name} <span className="mb-2 text-muted">{(atack.damage > 0? "|" : "")} {atack.damage}</span>
                                </div>
                            <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle singlePoke--font15">{atack.text}</Card.Subtitle>
                            </div>
                        })}
                        </Card.Title>
                    </Card.Body>
                    <Card className="singlePoke--cardBoxWRR">
                        <Card.Body>
                            <Card.Subtitle>{pokemon.weaknesses.map((week:any, key)=>{
                            return <div className="singlePoke--center" key={key}>
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">WEAKNESS</Card.Subtitle>
                                    <div>{week.type} <i>{week.value}</i></div>
                                </div>
                            })}
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Body>
                            {(pokemon.resistances ?
                                <Card.Subtitle>{pokemon.resistances.map((ressis:any, key)=>{
                                return <div className="singlePoke--center" key={key}>
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">RESISTANCES</Card.Subtitle>
                                        <div>{ressis.type}<i>{ ressis.value}</i></div> 
                                    </div>
                                })}
                                </Card.Subtitle>
                            : 
                                <Card.Subtitle>
                                <div className="singlePoke--center">
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">RESISTANCES</Card.Subtitle>
                                    <i>N/A</i>
                                </div>
                                </Card.Subtitle>
                            )}
                        </Card.Body>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted singlePoke--font12 singlePoke--center">RETREAT COST</Card.Subtitle>
                            <Card.Subtitle className="singlePoke--centerFlex">{pokemon.retreatCost.map((retreat:any, key)=>{
                            return <div  key={key}>
                                    <span className="singlePoke--atackImg singlePoke--iconColorless singlePoke--left"/>
                                </div>
                            })}
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card className="singlePoke--cardBoxWRR">
                        <Card.Body>
                            <Card.Subtitle>
                                <div className="singlePoke--center">
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">ARTIST</Card.Subtitle>
                                    <div className="singlePoke--colorGray">{pokemon.artist}</div>
                                </div>
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Body>
                            <Card.Subtitle>
                                <div className="singlePoke--center">
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">RARITY</Card.Subtitle>
                                    <div className="singlePoke--colorGray">{pokemon.rarity}</div>
                                </div>
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Body>
                            <Card.Subtitle>
                                <div className="singlePoke--center">
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">SET</Card.Subtitle>
                                    <div className="singlePoke--colorGray">{pokemon.set}
                                        <img alt="" className="singlePoke--setImg" src={`https://images.pokemontcg.io/${pokemon.setCode}/symbol.png`}/>
                                    </div>
                                </div>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Card>
            </div>
        )
    }
}

export default SingleCardPokemon