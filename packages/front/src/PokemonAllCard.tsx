import * as React from 'react';
import {ListModel} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import {Filter} from './Filter';

type PokemonCardS= {
    cartItems: Array<ListModel>,
    pokemon: Array<ListModel>,
    type: string,
    activePage: number,
    name: string,
    types: string,
    set: string

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
            set: ''
        }
        this.getAllCards = this.getAllCards.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleChangeTypes = this.handleChangeTypes.bind(this);
        this.handleChangeSets =this.handleChangeSets.bind(this);
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
        this.getAllCards(pageNumber)
      }

    public handleChangeName(e:any){
        this.setState({
            name: e.target.value
        })
         this.getAllCards(e.target.value,this.state.types,this.state.set)
    }

    public handleChangeTypes(e:any){
        this.setState({types: e.target.value});
        this.getAllCards(this.state.activePage,this.state.name, e.target.value, this.state.set)
    }
    public handleChangeSets(e:any){
        this.setState({set: e.target.value});
        this.getAllCards(this.state.activePage,this.state.name,this.state.types,e.target.value)
    }

    componentDidMount(){
        this.getAllCards()
    }

    render(){
        return(
            <div>
                <Filter name={this.state.name} handleChangeName={this.handleChangeName}  types={this.state.types}  handleChangeTypes={this.handleChangeTypes} set={this.state.set} handleChangeSets={this.handleChangeSets}/>
                    <div className="pokemonCard">
                        {this.state.pokemon.map((pokemon:any)=> {
                           return <div className="pokemonCard--box" key={pokemon.id}>
                               <div>
                                  <button className="btn btn-primary pokemonCard--buttonHeight" onClick={(e)=>{
                                       const cartItems = pokemon.id;
                                       localStorage.setItem('cartItems', JSON.stringify(cartItems));
                                       this.setState({
                                          cartItems
                                       })
                                    }}>Dodaj do ulubionych</button>
                                  <NavLink to={`cards/${pokemon.id}`}><img className="pokemonCard--cardImg" src={`${pokemon.imageUrl}`} alt=""/></NavLink>
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