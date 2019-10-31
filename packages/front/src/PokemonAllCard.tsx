import * as React from 'react';
import {ListModel} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';
import Pagination from 'react-js-pagination';

type PokemonCardS= {
    pokemon: Array<ListModel>,
    filter: string,
    type: string,
    activePage: number
}

export class PokemonAllCard extends React.Component<any,PokemonCardS> {
    constructor(props:any){
        super(props);
        this.state= {
            pokemon: [],
            filter: '',
            type: '',
            activePage: 0
        }
        this.getAllCards = this.getAllCards.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.searchByType = this.searchByType.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    public getAllCards(name:string, type:string){
        getCard(name, type).then(resp => {
            this.setState({
                pokemon: resp.cards       
            })
        })
    }

    public searchByName(e:any){
        this.setState({
            filter: e.target.value
        })
        this.getAllCards(e.target.value, this.state.type)
    }

    public searchByType(e:any){
        this.setState({
            type: e.target.value
        })
        
        
        this.getAllCards(this.state.filter,e.target.value)
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber-1});
        // this.getAllCards(pageNumber-1)
      }


    componentDidMount(){
        this.getAllCards(this.state.filter, this.state.type)
    }

    render(){

        return(
            <div>
                  <input type="text" name="searchName" className="pokemonCard--searchName" value={this.state.filter || this.state.type} onChange={this.searchByName && this.searchByType} placeholder="Search name..." />
                    <div className="pokemonCard">
                        {this.state.pokemon.map((pokemon:any, key)=> {
                           return <div className="pokemonCard--box" key={pokemon.id}>
                               <NavLink to={`cards/${pokemon.id}`}><img className="pokemonCard--cardImg" src={`${pokemon.imageUrl}`} alt=""/></NavLink>
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