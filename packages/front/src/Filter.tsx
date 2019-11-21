import * as React from 'react'
import {SetsModel} from './ModelPokemon';
import {getSetsOfPokemon} from './conector';

type IProps = {
    values?:any,
    errors?:any,
    touched?:any,
    handleChange?:any,
    handleBlur?:any,
    handleSubmit?:any,
    types?: string,
    set?: string,
    handleChangeTypes?:any,
    handleChangeSets?:any,
    name?: string,
    handleChangeName?: any
}

type IState = {
    sets: Array<SetsModel>,
}

export class Filter extends React.Component <IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            sets: []
        }
        this.getSets = this.getSets.bind(this);
    }

    public getSets(){
        getSetsOfPokemon().then(resp => {
            this.setState({
                sets: resp.sets       
            })
        })
    }

    componentDidMount(){
        this.getSets();
    }

    render(){
        const { 
            handleSubmit,
            types,
            set,
            handleChangeTypes,
            handleChangeSets,
            name,
            handleChangeName
        } = this.props;

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group col-8 container">
                  <div>
                      <label htmlFor="name">Search by Pokemon name </label>
                      <input type="text" name="searchName" className="pokemonCard--searchName" value={name} onChange={handleChangeName} placeholder="Search name..." />
                    </div>
                    <div>
                        <label htmlFor="type">Chose type of Pokemon </label>
                            <select id="type" name="type" value={types} onChange={handleChangeTypes}>
                                <option value=""></option>
                                <option value="colorless">Colorless</option>
                                <option value="grass">Grass</option>
                                <option value="fire">Fire</option>
                                <option value="water">Water</option>
                                <option value="fighting">Fighting</option>
                                <option value="lightning">Lightning</option>
                                <option value="psychic">Psychic</option>
                                <option value="fairy">Fairy</option>
                                <option value="metal">Metal</option>
                                <option value="darkness">Darkness</option>
                                <option value="dragon">Dragon</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="sets">Chose sets</label>
                            <select id="set" name="set" value={set} onChange={handleChangeSets}>
                                {this.state.sets.map((sets:SetsModel)=> {
                                        return <option value={sets.name}>{sets.name}</option>
                                    })
                                }
                            </select>
                    </div>
            </form>
        </div>
    )
}}
