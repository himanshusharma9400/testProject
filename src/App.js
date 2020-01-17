import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./redux-store/store";
import Home from './modules/home/homeContainer'
import NavBar from "./commons/navbar/navBar";

function App() {
    return (
        <div className="App">
            <Router>
                <Provider store={store}>
                    <NavBar/>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                    </Switch>
                </Provider>
            </Router>
        </div>
    );
}

export default App;
