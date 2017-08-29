import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAYD79kjLJbiouUys-kCE2NVhT2TDD-juQ',
            authDomain: 'authentication-f44bc.firebaseapp.com',
            databaseURL: 'https://authentication-f44bc.firebaseio.com',
            projectId: 'authentication-f44bc',
            storageBucket: 'authentication-f44bc.appspot.com',
            messagingSenderId: '165536103909'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }


    // Check state whether user log in to render button 'Log Out' or <LoginForm>
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                 );
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
};

export default App;