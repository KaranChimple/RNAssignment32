import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import MapsScreen from './screens/MapsScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import CcardScreen from './screens/CcardScreen';
import ImageListScreen from './screens/ImageListScreen';

const Tabs = createMaterialBottomTabNavigator(
    {
        Maps: { screen: MapsScreen },
        QrCode: { screen: QrCodeScreen },
        Ccard: { screen: CcardScreen },
        ImageList: { screen: ImageListScreen }
    }, {
    initalRouteName: 'Maps',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
}
);

export const AppContainer = createAppContainer(Tabs);

export default class Routes extends Component {

    render() {
        return (
            <View>
                <AppContainer />
            </View>
        );
    }
}