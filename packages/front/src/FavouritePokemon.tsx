 import * as React from 'react';
 import {getCard} from './conector';
 import {Cart} from './ModelPokemon';

 type ICartS = {
     carts: Array<Cart>
 }

export class FavouritePokemon extends React.Component <any,ICartS> {
    constructor(props:any){
        super(props);
        this.state= {
            carts: []
        }
        this.showCartById = this.showCartById.bind(this);
    }

    public showCartById(){
        const pokemonItemcart = localStorage.getItem('cartItems');
        if(pokemonItemcart != null){
            let favouriteItemsId = JSON.parse(pokemonItemcart);
            let stringArray = favouriteItemsId.join('|').toString();
            getCard(stringArray).then(resp => {
                this.setState({
                    carts: resp.cards
                })
            })
        }
    }

    componentDidMount(){
        this.showCartById();
    }

    render(){
    return (
            <div className="alert alert-info" >
                <div>
                    <div>{this.state.carts.length !== null? 
                        <div>
                            {this.state.carts.map((cart) => {
                                <div key={cart.id}> 
                                    <div> You have {cart.id} Cards</div>
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