 import * as React from 'react';
 import {getSingleCardPokemon} from './conector';
 import {Cart} from './ModelPokemon';

 type ICartS = {
     cart: Cart
 }

export class FavouritePokemon extends React.Component <any,ICartS> {
    constructor(props:any){
        super(props);
        this.state= {
            cart: {
                name: '',
                id: ''
            }
        }
        this.showCartById = this.showCartById.bind(this);
    }

    public showCartById(){
        const pokemonItemcart = localStorage.getItem('cartItems') ;
        const cartId = (pokemonItemcart === null)? '' : pokemonItemcart.slice(1,-1);
        getSingleCardPokemon(cartId).then(resp => {
            this.setState({
                cart: resp.card
            })
            console.log(cartId)
        })
    }

    componentDidMount(){
        this.showCartById();
    }

    render(){
        const {cart} = this.state
    return (
            <div className="alert alert-info" >
                
                {cart.id !== null? <div> You have {cart.name} Cards </div> : "You don't have favourite pokemon"}
            </div>
        )
    }
}
    export default FavouritePokemon