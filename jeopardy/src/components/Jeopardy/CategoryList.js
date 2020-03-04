import React from 'react';
import './CategoryList.css'
    function CategoryList(props){

        return(
            <div className="Container">
            <div className ='CategoryList'>
                <div className='Score'>
                    <h3>Score:{props.score}</h3>
                </div>
                <br/>
                
               <div className="CategoryContainer">
                   <div className="cats">
                {
                    props.categories.map(category => (
                    <button 
                    className = "categorySelect" 
                    key={category.id}
                    onClick={() => props.getQuestion(category.id, category.clues_count - 1)}
                    >{category.title}</button>
                    ))
                }
                </div>
                </div>
            </div>
            </div>
        )
    }
    export default CategoryList;