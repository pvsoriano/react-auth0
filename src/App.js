import React, { Component }from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import NavBar from "./NavBar";

class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="body">
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                </div>
            </>
        );
    }
}

export default App;

