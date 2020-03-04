import React from 'react';
import SubmitAnswer from '../../components/SubmitAnswer/SubmitAnswer'

function Display(props){
    const data = props.data || {}
    const category = data.category || {};
    return(
        <div className="Display">
                   <div className='Game'>
                        <div className="scoreContainer">
                            <h1>Score:{props.score}</h1>
                        </div>
                <div className="value">
                        Value:{JSON.stringify(props.data.value)}
                </div>
                    
                <div className="categoryContainer">
                        <div className="category">
                            Category: {JSON.stringify(category.title)}
                                <br/>
                    </div>
                </div>    
                    <div className='clue'>
                         Question:{JSON.stringify(props.data.question )}
                            <br/>
                    </div>

                    <div className = 'SubmitContainer'>
                            <SubmitAnswer ansCheck={props.ansCheck}/>
                    </div>
            </div>
        </div>
    );
};
export default Display;