import React from 'react';
import { Route } from 'react-router-dom';
import { Card } from '@material-ui/core';
import Jeopardy from "./components/Jeopardy/Jeopardy"
import Welcome from './components/Welcome/Welcome'

import './App.css';

function App() {
  return (
    
    <div className="App">
        <Card>
       <Route exact path="/" component={Welcome}/>
       <Route path='/jeopardy' component={Jeopardy}/>
       </Card>
    </div>
    
  );
}

export default App;
