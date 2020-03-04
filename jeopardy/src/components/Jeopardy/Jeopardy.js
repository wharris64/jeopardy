import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService"
import Display from '../../components/Jeopardy/Display'
import CategoryList from './CategoryList'
// import Scoreboard from '../../components/Scoreboard/Scoreboard'
import './Jeopardy.css'

    class Jeopardy extends Component {
        constructor(props){
            super(props)
            this.client = new JeopardyService();
            this.state = {
                data: {},
                score: 0,
                categories:[]
            }
        }
        getQuestion = (categoryId, offsetMax = 0) => {
            if (categoryId){
                this.client.getQuestion(categoryId, offsetMax)
                    .then(result => {
                        this.setState({
                            data:result.data[0]
                        });
                    });
            }
            return this.client.getQuestion().then(result => {
                this.setState({
                    data: result.data[0]
                })
            })
        }
        componentDidMount() {
            this.getCategories();
        }

        ansCheck = (answer) => {
            if(answer.toUpperCase() === this.state.data.answer.toUpperCase()){
                this.setState((state, props) => ({
                    score: state.score + state.data.value,
                    data:{}
                }));
            }
            else{
                this.setState((state, props) => ({
                    score:state.score - state.data.value,
                    data:{}
                }));
            }
            this.getCategories();
        }

        getCategories = () => {
            return this.client.getCategories(3)
            .then(result =>{
                this.setState({
                    categories: result.data
                })

            })
        }


        render() {
            
            if (this.state.data.question){
            return(
                <div className='Jeopardy'>
                <Display
                data={this.state.data}
                score={this.state.score}
                ansCheck={this.ansCheck}
                />
                </div>
            );}  
            return(
                <div className = "Jeopardy">
                    <CategoryList
                     score={this.state.score}
                     categories={this.state.categories}
                     getQuestion={this.getQuestion}
                    />
                    </div>
            )
        }
    }
    export default Jeopardy;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        