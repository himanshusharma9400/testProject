import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./redux-store/store";
import Home from './modules/home/homeContainer'
import ShowDetails from './modules/showDetails/showDetailsContainer'
import NavBar from "./commons/navbar/navBar";
import BackgroundImageContainer from "./commons/backgroundImageContainer/backgroundImageContainer";
import NotFoundPageContainer from "./commons/notFound/notFoundPageContainer";

function App() {
    return (
        <div className="App">
            <Router>
                <Provider store={store}>
                    <NavBar/>
                    <BackgroundImageContainer/>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/:show' component={ShowDetails} exact/>
                        <Route path="*">
                            <NotFoundPageContainer/>
                        </Route>
                    </Switch>
                </Provider>
            </Router>
        </div>
    );
}

export default App;
