import * as React from 'react';
import {SetsModel, ListModel} from './ModelPokemon';
import {Card} from 'react-bootstrap';
import {getCard, getSetsOfPokemon} from './conector';
import Pagination from 'react-js-pagination';


type PokemonSetS= {
    sets: Array<SetsModel>,
    cards: Array<ListModel>,
    activePage: number
}

export class PokemonSets extends React.Component<any,PokemonSetS> {
    constructor(props:any){
        super(props);
        this.state= {
            sets: [],
            cards: [],
            activePage: 1
        }
        this.getSets = this.getSets.bind(this);
        this.getCardForSets = this.getCardForSets.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    public getSets(){
        getSetsOfPokemon().then(resp => {
            this.setState({
                sets: resp.sets       
            })
        })
    }

    public getCardForSets(pageNumber:number){
        // getCard(pageNumber).then(resp => {
        //     this.setState({
        //         cards: resp.cards       
        //     })
        // })
    }

    public handlePageChange(pageNumber:number) {
        this.setState({activePage: pageNumber});
        this.getCardForSets(pageNumber)
      }


    componentDidMount(){
        this.getSets()
    }

    render(){

        return(
            <div>
                <div className="pokemonSets">
                    {this.state.sets.map((sets:SetsModel, key)=> {
                        return <div className="pokemonSets--cardBox" key={sets.name}>
                            <div className="pokemonSets--card"  onClick={()=>this.getCardForSets(this.state.activePage)} >
                                <Card.Body>
                                    <Card.Img className="pokemonSets--logoSets" variant="top" src={`${sets.logoUrl}`} />                               
                                    <Card.Subtitle className="mb-2 text-muted">{sets.name}</Card.Subtitle>
                                    <Card.Text>{sets.releaseDate}</Card.Text>
                                    <Card.Text>{(sets.standardLegal )? "Standard Legal": ""}</Card.Text>
                                    <Card.Text>{(sets.expandedLegal )? "Expanded Legal": ""}</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    })}
                     <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={9320}
                        onChange={this.handlePageChange}
                    />   
                </div>
            </div>
        )
    }
}
export default PokemonSets