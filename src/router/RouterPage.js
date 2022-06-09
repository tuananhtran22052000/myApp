import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import Header from './Header'
import HomePage from '../HomePage'

const RouterPage = () =>{
    return(
        <div>
            
            <Router>
                <div>
                    <Header />
                </div>
                <div >
                    <Switch>
                        <Route exact path='/'><HomePage /></Route>
                        <Route  path='/product'>TestEffecct </Route>
                        <Route  path='/about'>Effect </Route>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default RouterPage