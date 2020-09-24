import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RentingInbox from './components/RentingInbox';
import LendingInbox from './components/LendingInbox';
import TabBar from './../../components/TabBar';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

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
                    fontSize: 12
                },
                indicatorStyle: {
                    borderBottomColor: '#6EA0BE',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="Renting"
                component={({ navigation }) => <RentingInbox navigation={navigation} privatNavigation={privatNavigation} number={1} />}
                options={{
                    tabBarLabel: 'Renting',
                }} />
            <Tab.Screen
                name="Lending"
                component={({ navigation }) => <LendingInbox navigation={navigation} privatNavigation={privatNavigation} number={1} />}
                options={{
                    tabBarLabel: 'Lending',
                }} />
        </Tab.Navigator>
    );
}

function Inbox(navigation) {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Renting"
                >
                    <Stack.Screen
                        name="TabStack"
                        component={() => TabStack(navigation)}
                        options={{ title: 'Inbox' }} />
                </Stack.Navigator>
            </NavigationContainer>
            <TabBar props={navigation} />
        </>

    );
}

export default Inbox;