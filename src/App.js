import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/contact/Contact';
import Engagement from './components/categories/engagement';
import Couple from './components/categories/couple';
import Portrait from './components/categories/portrait';
import Place from './components/place/place';
import Pricing from './components/pricing/pricing';
import Error from './components/Error';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
        <Router className="App">
            <Navigation/>
            <Switch>
                <Route path="/" component={Home} exact="exact"/>
                <Route path="/categories/engagement" component={Engagement}/>
                <Route path="/categories/couple" component={Couple}/>
                <Route path="/categories/portrait" component={Portrait}/>
                <Route path="/place" component={Place}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
            <Footer/>
        </Router>);
    }
}

export default App;
