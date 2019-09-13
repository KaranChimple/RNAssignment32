import React, {Component} from 'react';
import {View} from 'react-native';
import Routes from './routes';

export default class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <View>
                <Routes />
            </View>
        );
    }
}