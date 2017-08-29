import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {

    componentWillMount() {
         const config = {
            apiKey: 'AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U',
            authDomain: 'manager-8d1fe.firebaseapp.com',
            databaseURL: 'https://manager-8d1fe.firebaseio.com',
            projectId: 'manager-8d1fe',
            storageBucket: 'manager-8d1fe.appspot.com',
            messagingSenderId: '637562090503'
          };
          firebase.initializeApp(config);
    }

// Middleware is what allows us to take the middleware Intel redux to actually make use of this thing.
// Redux Thunk handle any type of asynchronous action creators
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;