import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
<Router>
<App/>
</Router>,
</ProductProvider>,
document.getElementById('root'));

serviceWorker.unregister();
