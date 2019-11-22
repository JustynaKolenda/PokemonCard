import * as React from 'react';
import {pokemonModel, ListModel} from './ModelPokemon';
import {Card} from 'react-bootstrap';
import {getSingleCardPokemon} from './conector';
import { PageEnum} from './EnumTypes';


type SinglePokemonS = {
    pokemon: any,
    atackMap: string,
    cartItemsId: Array<ListModel>,
    disable: boolean
}


export class SingleCardPokemon extends React.Component <any,SinglePokemonS> {
    constructor(props:any){
        super(props);
        this.state= {
            cartItemsId: [],
            pokemon: new pokemonModel(),
            atackMap : '',
            disable : false
        }
        this.getSingleCard = this.getSingleCard.bind(this);
        this.printIcon = this.printIcon.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleGoToFav = this.handleGoToFav.bind(this)
    }  

    public getSingleCard() {
        getSingleCardPokemon(this.props.match.params.indexPokemon).then(resp => {
            this.setState({
                pokemon: resp.card
            })
        })
    }

    public  printIcon(cost:any){
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
    public handleAddToCart(){
        const cartItemsId = this.state.pokemon.id;
        const storageId = localStorage.getItem('cartItems');
        if(cartItemsId !== storageId ){
            localStorage.setItem('cartItems', JSON.stringify(cartItemsId));
        } else {
           this.setState({
               disable: true
           })
        }
        this.setState({
            cartItemsId
        }) 
    }

    public handleGoToFav(){
        this.props.history.push(`${PageEnum.FAVOURITE}`);
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
                        <div className="singlePoke--buttonStyle">
                            <button className="btn btn-primary singlePoke--marginRight pokemonCard--buttonHeight" onClick={this.handleAddToCart} disabled={this.state.disable}>Dodaj do ulubionych</button>
                            <button className="btn btn-primary pokemonCard--buttonHeight" onClick={this.handleGoToFav}>Przejdź do ulubionych</button>
                        </div>
                        <Card.Title >{pokemon.name}
                            <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle">{pokemon.supertype} - {pokemon.subtype} 
                            {pokemon.types}
                            <Card.Subtitle  className="mb-2 text-muted singlePoke--hp">{pokemon.hp > 0? <div>HP {pokemon.hp}{pokemon.types.map((type:string, key:any)=>{
                                return <span key={key}>{this.printIcon(type)}</span>
                            })}</div> : ""}</Card.Subtitle>
                            </Card.Subtitle>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="singlePoke--cardBox">
                    <Card.Body>
                    {pokemon.attacks ?
                        <Card.Title className="singlePoke--atacks">{pokemon.attacks.map((atack:any)=>{
                        return <div className="singlePoke--marBottom" key={atack.name}>
                                <div className="singlePoke--atackName"><div>{atack.cost.map((cost:string, key:any)=>{
                                    return <div key={key}>{this.printIcon(cost)}</div>
                                })}
                                <span className="singlePoke--atackName">
                                    {atack.name} <span className="mb-2 text-muted">{(atack.damage > 0? "|" : "")} {atack.damage}</span>
                                </span>
                                </div>
                                </div>
                            <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle singlePoke--font15">{atack.text}</Card.Subtitle>
                            </div>
                        })}
                        </Card.Title>
                        :
                        <Card.Subtitle className="mb-2 text-muted singlePoke--subtitle singlePoke--font15">{pokemon.text}</Card.Subtitle>
                    }
                    </Card.Body>
                    <Card className="singlePoke--cardBoxWRR">
                        <Card.Body>
                            {pokemon.weaknesses ?
                                <Card.Subtitle>{pokemon.weaknesses.map((week:any, key:string)=>{
                                return <div className="singlePoke--center" key={key}>
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">WEAKNESS</Card.Subtitle>
                                        <div className="singlePoke--centerFlex">{this.printIcon(week.type)} <i>{week.value}</i></div>
                                    </div>
                                })}
                                </Card.Subtitle>
                            :
                                <Card.Subtitle>
                                    <div className="singlePoke--center">
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">WEAKNESS</Card.Subtitle>
                                        <i>N/A</i>
                                    </div>
                                </Card.Subtitle>
                            }
                        </Card.Body>
                        <Card.Body>
                            {(pokemon.resistances ?
                                <Card.Subtitle>{pokemon.resistances.map((ressis:any, key:string)=>{
                                return <div className="singlePoke--center" key={key}>
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">RESISTANCES</Card.Subtitle>
                                        <div className="singlePoke--centerFlex">{this.printIcon(ressis.type)}<i>{ ressis.value}</i></div> 
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
                            {pokemon.retreatCost ?
                                <div>
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12 singlePoke--center">RETREAT COST</Card.Subtitle>
                                    <Card.Subtitle className="singlePoke--centerFlex">{pokemon.retreatCost.map((retreat:any, key:string)=>{
                                    return <div  key={key}>
                                            <span className="singlePoke--atackImg singlePoke--iconColorless singlePoke--left"/>
                                        </div>
                                    })}
                                    </Card.Subtitle>
                                </div>
                            : 
                                <Card.Subtitle>
                                <div className="singlePoke--center">
                                    <Card.Subtitle className="mb-2 text-muted singlePoke--font12">RETREAT COST</Card.Subtitle>
                                    <i>N/A</i>
                                </div>
                                </Card.Subtitle>
                            }
                        </Card.Body>
                    </Card>
                    <Card className="singlePoke--cardBoxWRR">
                        <Card.Body>
                            {pokemon.artist ?
                                <Card.Subtitle>
                                    <div className="singlePoke--center">
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">ARTIST</Card.Subtitle>
                                        <div className="singlePoke--colorGray">{pokemon.artist}</div>
                                    </div>
                                </Card.Subtitle>
                            :    
                                <Card.Subtitle>
                                    <div className="singlePoke--center">
                                        <Card.Subtitle className="mb-2 text-muted singlePoke--font12">ARTIST</Card.Subtitle>
                                        <i>N/A</i>
                                    </div>
                                </Card.Subtitle>
                            }
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