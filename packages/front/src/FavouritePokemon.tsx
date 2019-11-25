 import * as React from 'react';
 import {getCard} from './conector';
 import {Cart} from './ModelPokemon';

 type ICartS = {
     carts: Array<Cart>,
     favouriteItems: boolean
 }

export class FavouritePokemon extends React.Component <any,ICartS> {
    constructor(props:any){
        super(props);
        this.state= {
            carts: [],
            favouriteItems: false
        }
        this.showCartById = this.showCartById.bind(this);
    }

    public showCartById(){
        const pokemonItemcart = localStorage.getItem('cartItems');
        if(pokemonItemcart != null){
            let favouriteItemsId = JSON.parse(pokemonItemcart);
            let stringArray = favouriteItemsId.join('|');
            getCard(stringArray).then(resp => {
                this.setState({
                    carts: resp.cards
                })
            })
        }
    }

    componentDidMount(){
        this.showCartById();
        let getStorage = localStorage.getItem('cartItems');
        if(getStorage != null){
            this.setState({
                favouriteItems: true
            })   
        }
    }

    render(){
    return (
            <div className="alert alert-info" >
                <div>
                    <div>{ this.state.favouriteItems== true?
                        <div>
                            {this.state.carts.map((cart: Cart, key) => {
                               return <div key={key}> 
                                        <div> My favourite Cart: {cart.name}</div>
                                        <img src={`${cart.imageUrl}`} alt=""/>
                                    </div>
                            })}
                        </div>
                     : "You don't have favourite carts"
                    }
                    </div>
                </div> 
            </div>
        )
    }
}
    export default FavouritePokemon