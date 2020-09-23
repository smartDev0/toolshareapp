import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import TabBar from './../../components/TabBar';
import Tool from './components/Tool';
import Reservation from './components/Reservation'
import Request from './components/Request'
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const NavigationDrawerStructure = (navigation) => {
    //Structure for the navigatin Drawer
    const goHome = (e) => {
        navigation.navigationProps.navigate('HomeScreen')
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={goHome}>
                <Feather name="chevron-left" size={30} color="#6EA0BE" />
            </TouchableOpacity>
        </View>
    );
}
const TabStack = (privatNavigation) => {
    return (
        <Tab.Navigator
            initialRouteName="ToolShare"
            tabBarOptions={{
                activeTintColor: '#6EA0BE',
                inactiveTintColor: 'black',
                style: {
                    backgroundColor: 'white',
                },
                labelStyle: {
                    textAlign: 'center',
                    fontSize: 10
                },
                indicatorStyle: {
                    borderBottomColor: '#6EA0BE',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="Reservation"
                component={Reservation}
                options={{
                    tabBarLabel: 'Reservation',
                }} />
            <Tab.Screen
                name="Tool"
                component={Tool} 
                options={{
                    tabBarLabel: 'Tools',
                }} />
            <Tab.Screen
                name="Request"
                component={Request}
                options={{
                    tabBarLabel: 'Requests',
                }} />
            <Tab.Screen
                name="Earning"
                component={Tool}
                options={{
                    tabBarLabel: 'Earnings',
                }} />
        </Tab.Navigator>
    );
}

function ToolBox(navigation) {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Reservation"
                    >
                    <Stack.Screen
                        name="TabStack"
                        component={() => TabStack(navigation)}
                        options={{ title: 'Toolbox' }} />
                </Stack.Navigator>
            </NavigationContainer>
            <TabBar props={navigation} />
        </>

    );
}

export default ToolBox;