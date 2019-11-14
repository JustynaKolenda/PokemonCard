import * as React from 'react';
import Circle from './Circle';

type ITeamS = {
    counter: number;
    counterTeam: number;
}


export class TeamPokemon extends React.Component<any,ITeamS> {
    constructor(props:any){
        super(props);
        this.state = {
            counter: 2,
            counterTeam: 2
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.incrementTeam = this.incrementTeam.bind(this);
        this.decrementTeam = this.decrementTeam.bind(this);
    }

    public increment() {
        this.setState({
          counter: this.state.counter + 1
        })
      }
      
    public  decrement(){
        this.setState(prevState => 
            ({counter: prevState.counter? prevState.counter -1: 0})
        )
    }
    public incrementTeam() {
        this.setState({
            counterTeam: this.state.counterTeam + 1
        })
      }
      
    public  decrementTeam(){
        this.setState(prevState => 
            ({counterTeam: prevState.counterTeam? prevState.counterTeam-1: 0})
        )
    }

    render(){
        return (
            <>
            <div>
                <div>Choose the number of people playing </div>
                <div className="team--groupIncrement">
                    <button className="team--increment" onClick={this.increment}>+</button>
                    <div>{this.state.counter}</div>
                    <button className="team--decrement" onClick={this.decrement}>-</button>
                </div>
            </div>
            <div>
                <div>How many teams </div>
                <div className="team--groupIncrement">
                    <button className="team--increment" onClick={this.incrementTeam}>+</button>
                    <div>{this.state.counterTeam}</div>
                    <button className="team--decrement" onClick={this.decrementTeam}>-</button>
                </div>
            </div>
              <Circle />
            </>
        )
    }
}