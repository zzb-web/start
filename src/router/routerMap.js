import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

  import Taskreminder from '../components/Taskreminder/index.js';
  import Overview from '../components/Overview/index.js';

  class RouterMap extends React.Component{
      render(){
          return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Taskreminder}/>
                    <Route path="/overview" component={Overview}/>
                </Switch>
          </Router>
          )
      }
  }

  export default RouterMap;