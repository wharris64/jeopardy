import React, { Component } from 'react';
import './Scoreboard.css'
class Scoreboard extends Component{
    constructor(state){
        super(state)
        this.state = state
        };
    
render(){
    const score = this.state.score
    return(
    <div className="scoreContainer">
        <h1>Score:{score}</h1>
    
    </div>
    )
}
}
export default Scoreboard;