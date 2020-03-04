import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props){
    return(
        <div className= "Navigation">
            <ul>
                <li><Link to="/"> Home</Link>Home</li>
                <li><Link to="/jeopardy">Jeopardy</Link></li>
            </ul>
        </div>
    )
}
export default Navigation;