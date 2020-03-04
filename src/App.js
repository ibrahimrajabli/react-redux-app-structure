import React from 'react';
import './App.css';
import Mainpage from "./pages/home/mainpage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Mainpage/>
                        </Route>
                        <Route path="/">
                            <Mainpage/>
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
