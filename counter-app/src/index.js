import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "bootstrap/dist/css/bootstrap.css";
// Bootstrap bu şekilde import ediliyor

import Counters from "./components/counters"; 
// Counters class'ı default export (dosya içine bakınız) bu nedenle {} kullanmıyoruz.

ReactDOM.render(<Counters />, document.getElementById('root'));
// Yukarıda sadece Counters component'i render ediliyor.

registerServiceWorker();
