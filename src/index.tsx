import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAzSapnAqCK9oIP1a-Am7qrbaSY2EBBSJ0',
  authDomain: 'react-brawl-game.firebaseapp.com',
  databaseURL: 'https://react-brawl-game.firebaseio.com',
  projectId: 'react-brawl-game',
  storageBucket: 'react-brawl-game.appspot.com',
  messagingSenderId: '1063573176900',
  appId: '1:1063573176900:web:3d718637e308b8ec'
};

app.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
