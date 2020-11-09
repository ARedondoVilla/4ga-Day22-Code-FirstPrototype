import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import injectContext from "./store"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import About from "./pages/about.js"
import List from "./pages/list.js"
import User from "./pages/user.js"
import Donation from "./pages/donation.js"
import Disease from "./pages/disease.js"
import Registro from "./pages/registro.js"
import Password from "./pages/password.js"






export default injectContext(function(props) {
    return (
        <Router>
            <Navbar />
            
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/list">
                        <List />
                    </Route>

                    <Route path="/registro">
                        <Registro />
                    </Route>

                    <Route path="/password">
                        <Password />
                    </Route>

                    <Route path="/donation">
                        <Donation />
                    </Route>

                    <Route path="/disease">
                        <Disease />
                    </Route>

                    <Route path="/users/:id">
                        <User />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </Router>
    )
})