import * as React from 'react'
import {SetsModel, ModelType} from './ModelPokemon';
import {getSetsOfPokemon, getTypes} from './conector';

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
    typesP: Array<ModelType>
}

export class Filter extends React.Component <IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            sets: [],
            typesP: []
        }
        this.getSets = this.getSets.bind(this);
        this.getTypes = this.getTypes.bind(this);
    }

    public getSets(){
        getSetsOfPokemon().then(resp => {
            this.setState({
                sets: resp.sets       
            })
        })
    }

    public getTypes(){
        getTypes().then(resp => {
            this.setState({
                typesP: resp.types
            })
        })
    }

    componentDidMount(){
        this.getSets();
        this.getTypes();
        
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
                                {this.state.typesP.map((type: any)=> {
                                    return <option key={type} value={type}>{type}</option>
                                })}
                            </select>
                    </div>
                    <div>
                        <label htmlFor="sets">Chose sets</label>
                            <select id="set" name="set" value={set} onChange={handleChangeSets}>
                                {this.state.sets.map((sets:SetsModel)=> {
                                        return <option key={sets.name} value={sets.name}>{sets.name}</option>
                                    })
                                }
                            </select>
                    </div>
            </form>
        </div>
    )
}}
