 import * as React from 'react';
 import {getCard} from './conector';
 import {Cart} from './ModelPokemon';
 import Pagination from 'react-js-pagination';

 type ICartS = {
    carts: Array<Cart>,
    favouriteItems: boolean,
    activePage: number,
    id: string
 }

export class FavouritePokemon extends React.Component <any,ICartS> {
    constructor(props:any){
        super(props);
        this.state= {
            carts: [],
            favouriteItems: false,
            activePage: 1,
            id: ''
        }
        this.showCartById = this.showCartById.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getFilters = this.getFilters.bind(this);
        this.filterCallbac = this.filterCallbac.bind(this)
    }

    public showCartById(pageNumber:number){
        const filters = this.getFilters()
        getCard(pageNumber, filters).then(resp => {
            this.setState({
                carts: resp.cards    
            })
        })
    }

    public getFilters(){
        const filter = new URLSearchParams();
        const pokemonItemcart = localStorage.getItem('cartItems');
        if(pokemonItemcart != null){
            let favouriteItemsId = JSON.parse(pokemonItemcart);
            let stringArray = favouriteItemsId.join('|');
            this.setState({
                id: stringArray
            })
            if(this.state.id !== ''){
                filter.set('id', this.state.id);
                return filter
            }
        }
        return filter
    }

    public filterCallbac(){
        this.showCartById(this.state.activePage)
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber});
        this.showCartById(pageNumber)
    }

    componentDidMount(){
        let getStorage = localStorage.getItem('cartItems');
        this.showCartById(this.state.activePage)
        if(getStorage != null){
            this.setState({
                favouriteItems: true
            },  this.filterCallbac)   
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
                           
                        </div>
                     : "You don't have favourite carts"
                    }
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={9320}
                        onChange={this.handlePageChange}
                    />
                    </div>
                </div> 
            </div>
        )
    }
}
    export default FavouritePokemon