import React, { Component } from 'react';
import "./SubmitAnswer.css"
    class SubmitAnswer extends Component{
        constructor(props){
            super(props);
            this.state = {
              answer: ''  
            }} 
            
    //         this.handleChange = 
    //         this.handleChange.bind(this);
    //         this.handleSubmit = 
    //         this.handleSubmit.bind(this)
        

    //     handleChange(event, state){
    //         this.setState({submittedAnswer:
    //         event.target.value});
    //         answerCheck(state)
    //     }
    // };
            handleChange = event => {
                this.setState({
                    answer: event.target.value
                 })
            }

            handleSubmit = event =>{
                event.preventDefault();
                 this.props.ansCheck(this.state.answer)
                 this.setState({
                     answer: ''
                 })
            }
        
    render(){
        
        return(
            <div className = "SubmitAnswer">
            <form onSubmit={this.handleSubmit }>
                <label>
                    <p className = "whatis">What is:</p>
                    <input 
                        className='inputform'
                        type="text" 
                        name="playerAnswer" 
                        placeholder="Answer" 
                        value = {this.state.answer}
                        onChange={this.handleChange}
                    />
                </label>
                <button className = "SubButton">Submit</button>
            </form>
            </div>
    )
    }
}
    

    export default SubmitAnswer;    
