import * as React from 'react';
import {ListModel} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import {Filter} from './Filter';

type PokemonCardS= {
    cartItems: Array<string>,
    pokemon: Array<ListModel>,
    type: string,
    activePage: number,
    name: string,
    types: string,
    set: string,
    favouriteItems: Array<string>,
}

export class PokemonAllCard extends React.Component<any,PokemonCardS> {
    constructor(props:any){
        super(props);
        this.state= {
            cartItems: [],
            pokemon: [],
            type: '',
            activePage: 1,
            name: '',
            types: '',
            set: '',
            favouriteItems: [],
        }
        this.getAllCards = this.getAllCards.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleChangeTypes = this.handleChangeTypes.bind(this);
        this.handleChangeSets =this.handleChangeSets.bind(this);
        this.addToFavourite = this.addToFavourite.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    public getAllCards(pageNumber?:number,name?:string,types?:string,sets?:string){
        getCard(pageNumber,name,types,sets).then(resp => {
            this.setState({
                pokemon: resp.cards,    
            })
        })
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber});
        this.getAllCards(pageNumber,this.state.name,this.state.types,this.state.set)
      }

    public handleChangeName(e:any){
        this.setState({
            name: e.target.value
        })
         this.getAllCards(this.state.activePage,e.target.value,this.state.types,this.state.set)
    }

    public handleChangeTypes(e:any){
        this.setState({types: e.target.value});
        this.getAllCards(this.state.activePage,this.state.name, e.target.value, this.state.set)
    }
    public handleChangeSets(e:any){
        this.setState({set: e.target.value});
        this.getAllCards(this.state.activePage,this.state.name,this.state.types,e.target.value)
    }

    public handleChanges(e:any){
        switch(e) {
            case this.state.name:
                this.setState({
                    name: e.target.value
                })
            case this.state.types:
                this.setState({
                    types: e.target.value
                })
            case this.state.set:
                this.setState({
                    set: e.target.value
                })
        }
        this.getAllCards(this.state.activePage,this.state.name,this.state.types,this.state.set)
    }

    public addToFavourite(pokemonId: string){
        const cartItems = pokemonId;
        let storageIds = localStorage.getItem('cartItems');
        var favouriteItems = [];
        if(storageIds == null ){
             favouriteItems.push(cartItems);
             localStorage.setItem('cartItems', JSON.stringify(favouriteItems))
             this.setState({
                favouriteItems
            })
        } else {
             let favouriteItems =  JSON.parse(storageIds);
                if(!favouriteItems.includes(cartItems)){
                    favouriteItems.push(cartItems);
                    localStorage.setItem('cartItems', JSON.stringify(favouriteItems));
                    this.setState({
                        favouriteItems
                    })
                }
        } 
     }

    componentDidMount(){
        this.getAllCards();
        let getStorage = localStorage.getItem('cartItems');
        if(getStorage != null){
            this.setState({
                favouriteItems: JSON.parse(getStorage)
            })   
        }
    }

    render(){
        return(
            <div>
                <Filter name={this.state.name} handleChangeName={this.handleChangeName}  types={this.state.types}  handleChangeTypes={this.handleChangeTypes} set={this.state.set} handleChangeSets={this.handleChangeSets}/>
                    <div className="pokemonCard">
                        {this.state.pokemon.map((pokemon)=> {
                           return <div className="pokemonCard--box" key={pokemon.id}>
                               <div className="pokemonCard--groupBox">
                                  <NavLink to={`cards/${pokemon.id}`}><img className="pokemonCard--cardImg" src={`${pokemon.imageUrl}`} alt=""/></NavLink>
                                  <button className="btn btn-primary pokemonCard--buttonHeight pokemonCard--buttonSpecific" disabled={this.state.favouriteItems.includes(pokemon.id)} onClick={()=> this.addToFavourite(pokemon.id)}>Dodaj do ulubionych</button>
                               </div>
                            </div>
                        })}
                    </div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={9320}
                        onChange={this.handlePageChange}
                    />
            </div>
        )
    }
}
export default PokemonAllCard