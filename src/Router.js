import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ToolSearchResultsScreen from './components/ToolSearchResultsScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{backgroundColor: 'white'}}>
      <Scene key="root" hideNavBar>
        <Scene key="homeScreen" hideNavBar={true}>
          <Scene
            key="homeScreen"
            component={HomeScreen}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene
          key="profileScreen"
          component={ProfileScreen}
          title="Profile Screens"
          hideNavBar={true}
          //initial
        />
        <Scene
          key="toolSearchResults"
          component={ToolSearchResultsScreen}
          title="Results"
          leftTitle="<"
          onLeft={() => {
            Actions.homeScreen();
          }}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
{
  /* <Scene key="toolSelection">
          <Scene
            key="toolSearchResults"
            component={HomeScreen}
            title="Results"
            leftTitle="<"
            onLeft={() => {
              Actions.homeScreen();
            }}
            initial
          />
        </Scene>
      </Scene> */
}
