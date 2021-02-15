import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import About from '../About/About';

const routing = (
    <Router>
        <div className="nav">
            <img className="logo" src="./ToTheLight-logo.png" alt="To The Light" />
            <ul>
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li className="filler">&nbsp;</li>
            </ul>
            <Switch>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </Router>
);

const App: React.FC = () => (
    <div className="App">
        <div className="router-outlet">
            {routing}
        </div>
        <footer>
            This is footer.
        </footer>
    </div>
);

export default App;
