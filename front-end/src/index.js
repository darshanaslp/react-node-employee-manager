import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import Navigation from "./components/Header/Navigation";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

