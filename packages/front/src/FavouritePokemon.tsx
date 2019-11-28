 import * as React from 'react';
 import {getCard} from './conector';
 import {Cart} from './ModelPokemon';
 import Pagination from 'react-js-pagination';

 type ICartS = {
     carts: Array<Cart>,
     favouriteItems: boolean;
     activePage: number
 }

export class FavouritePokemon extends React.Component <any,ICartS> {
    constructor(props:any){
        super(props);
        this.state= {
            carts: [],
            favouriteItems: false,
            activePage: 1
        }
        this.showCartById = this.showCartById.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    public showCartById(pageNumber:number){
        // const pokemonItemcart = localStorage.getItem('cartItems');
        // if(pokemonItemcart != null){
        //     let favouriteItemsId = JSON.parse(pokemonItemcart);
        //     let stringArray = favouriteItemsId.join('|');
        //     getCard(pageNumber,stringArray).then(resp => {
        //         this.setState({
        //             carts: resp.cards
        //         })
        //     })
        // }
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber});
        this.showCartById(pageNumber)
      }

    componentDidMount(){
        this.showCartById(this.state.activePage);
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
                    <div>{ this.state.favouriteItems == true?
                          <div className="pokemonCardFavourit">
                            {this.state.carts.map((cart: Cart, key) => {
                               return <div  key={key}> 
                                        <div> My favourite Cart: {cart.name}</div>
                                        <img className="pokemonCardFavourit--box" src={`${cart.imageUrl}`} alt=""/>
                                    </div>
                            })}
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={20}
                                totalItemsCount={9320}
                                onChange={this.handlePageChange}
                            />
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