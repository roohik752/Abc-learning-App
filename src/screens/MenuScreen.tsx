import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from 'src/screens/Home';
import Sidebar from './Sidebars';
import Profile from './Profile';
import MaleProfile from './MaleProfile';
import { Dimensions } from 'react-native';
import FemaleProfile from './FemaleProfile';

const RightDrawer = createDrawerNavigator();

const MenuScreen = () => {
  const screenWidth = Dimensions.get('window').width; 
  return (
    <RightDrawer.Navigator
      useLegacyImplementation
      id="RightDrawer"
      drawerContent={(props) => <Sidebar  {...props} />}
      screenOptions={{
        drawerStyle: {
          width: screenWidth,
        },
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',
      }}>
      <RightDrawer.Screen name="Home" component={Home} />
      <RightDrawer.Screen name="Profile" component={Profile} />
      <RightDrawer.Screen name="MaleProfile" component={MaleProfile} />
      <RightDrawer.Screen name="FemaleProfile" component={FemaleProfile} />
    </RightDrawer.Navigator>
  );
}

export default MenuScreen;


