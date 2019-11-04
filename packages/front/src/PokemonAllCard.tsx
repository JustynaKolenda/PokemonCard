import * as React from 'react';
import {ListModel} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Filter from './Filter';
import { Formik} from 'formik';

type PokemonCardS= {
    pokemon: Array<ListModel>,
    filters: string,
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
            pokemon: [],
            type: '',
            filters: '',
            activePage: 0,
            name: '',
            types: '',
            set: ''
        }
        this.getAllCards = this.getAllCards.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleChangeTypes = this.handleChangeTypes.bind(this);
        this.handleChangeSets =this.handleChangeSets.bind(this)
        // this.submitting = this.submitting.bind(this);
    }

    public getAllCards(name?:string,types?:string,sets?:string){
        getCard(name,types,sets).then(resp => {
            this.setState({
                pokemon: resp.cards       
            })
        })
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber-1});
        // this.getAllCards(pageNumber-1)
      }

    
    // public submitting(){
    //     this.getAllCards()
    //     console.log("ok")
    // }

    public handleChangeName(e:any){
        this.setState({
            name: e.target.value
        })
        this.getAllCards(e.target.value,this.state.types,this.state.set)
    }

    public handleChangeTypes(e:any){
        this.setState({types: e.target.value});
        this.getAllCards(e.target.value,this.state.name, this.state.set)
    }
    public handleChangeSets(e:any){
        this.setState({set: e.target.value});
        this.getAllCards(e.target.value,this.state.types, this.state.name)
    }

    componentDidMount(){
        this.getAllCards(this.state.filters)
    }

    render(){

        return(
            <div>
                {/* <Formik
                    initialValues={this.state.filter}
                    onSubmit={this.submitting}
                >
                    {(props:any)=><Filter {...props}/>}
                </Formik> */}
                <Filter name={this.state.name} handleChangeName={this.handleChangeName}  types={this.state.types}  handleChangeTypes={this.handleChangeTypes} set={this.state.set} handleChangeSets={this.handleChangeSets}/>
                  <input type="text" name="searchName" className="pokemonCard--searchName" value={this.state.filters} onChange={this.handleChangeName} placeholder="Search name..." />
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