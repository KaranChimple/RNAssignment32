import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapsScreen from './screens/MapsScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import CcardScreen from './screens/CcardScreen';
import ImageListScreen from './screens/ImageListScreen';
import { createStackNavigator } from 'react-navigation-stack';

const Tabs = createMaterialBottomTabNavigator(
    {
        Maps: { 
            screen: MapsScreen,
            navigationOptions: {
                title: 'Maps',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="map" size={17} colro={tintColor} />
                )
            } },
        QrCode: { screen: QrCodeScreen,
            navigationOptions: {
                title: 'QR Code',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="crop-free" size={17} colro={tintColor} />
                )
            } },
        Ccard: { screen: CcardScreen,
            navigationOptions: {
                title: 'Credit Card',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="credit-card" size={17} colro={tintColor} />
                )
            } },
        ImageList: { screen: ImageListScreen,
            navigationOptions: {
                title: 'Image List',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="photo-album" size={17} colro={tintColor} />
                )
            } }
    }, {
    initalRouteName: 'Maps',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
}
);

const Stack = createStackNavigator({Tabs}, {headerMode: 'none'})

export default Routes = createAppContainer(Stack);

// export default class Routes extends Component {

//     render() {
//         return (
//             <View>
//                 <AppContainer />
//             </View>
//         );
//     }
// }