import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ToolSearchResultsScreen from './components/ToolSearchResultsScreen';
import SplashScreen from './screens/SplashScreen';
import PinScreen from './screens/auth/PinScreen';
import LoginScreen from './screens/auth/LoginScreen';
import ForgotScreen from './screens/auth/ForgotScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import NavigationRoutes from './NavigtionRoutes';
const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  PinScreen: {
    screen: PinScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotScreen: {
    screen: ForgotScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

// const RouterComponent = () => {
//   return (
//     <Router sceneStyle={{backgroundColor: 'white'}}>
//       <Scene key="root" hideNavBar>
//         <Scene key="homeScreen" hideNavBar={true}>
//           <Scene
//             key="homeScreen"
//             component={HomeScreen}
//             title="Please Login"
//             initial
//           />
//         </Scene>
//         <Scene
//           key="profileScreen"
//           component={ProfileScreen}
//           title="Profile Screens"
//           hideNavBar={true}
//           //initial
//         />
//         <Scene
//           key="toolSearchResults"
//           component={ToolSearchResultsScreen}
//           title="Results"
//           leftTitle="<"
//           onLeft={() => {
//             Actions.homeScreen();
//           }}
//         />
//       </Scene>
//     </Router>
//   );
// };

const RouterComponent = createSwitchNavigator({
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  NavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: NavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});
export default createAppContainer(RouterComponent);

