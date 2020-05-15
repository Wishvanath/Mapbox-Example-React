import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SampleMap from './component/sample_map/sampleMap';

ReactDOM.render(
    <Router>
        <div>
            {/* <Route exact path ="/" component ={App} /> */}
            <Route exact path ="/" component ={SampleMap} />
        </div>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
