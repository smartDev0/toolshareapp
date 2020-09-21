//Import React
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Image } from "react-native";
//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//Import External Screens
import HomeScreen from './screens/home/HomeScreen';
import ToolShare from './screens/toolShare/ToolShare';
const d = Dimensions.get("window");
const isX = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;

// const Home_StackNavigator = createStackNavigator({
//     HomeScreen: {
//         screen: HomeScreen,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
// });

// const ToolShare_StackNavigator = createStackNavigator({
//     ToolShareScreen: {
//         screen: ToolShare,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
// });

const DrawerNavigatorRoutes = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        ToolShareScreen: {
            screen: ToolShare,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
    
);
export default DrawerNavigatorRoutes;