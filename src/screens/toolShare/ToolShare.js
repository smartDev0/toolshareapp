import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Renting from './components/Renting';
import Lending from './components/Lending';

import TabBar from './../../components/TabBar';
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
function TabStack() {
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
                    fontSize:12
                },
                indicatorStyle: {
                    borderBottomColor: '#6EA0BE',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="Renting"
                component={Renting}
                options={{
                    tabBarLabel: 'Renting on ToolShare',
                }} />
            <Tab.Screen
                name="Lending"
                component={Lending}
                options={{
                    tabBarLabel: 'Lending on ToolShare',
                }} />
        </Tab.Navigator>
    );
}

function ToolShare({ navigation }) {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Renting"
                    screenOptions={{
                        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                        headerStyle: { backgroundColor: 'white' },
                        headerTintColor: 'black',
                        headerTitleStyle: { fontWeight: '100' }
                    }}>
                    <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'How ToolShare Works' }} />
                </Stack.Navigator>
            </NavigationContainer>
            <TabBar />
        </>
            
    );
}

export default ToolShare;