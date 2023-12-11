import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from 'src/screens/Home';
import Sidebar from './Sidebars';

const RightDrawer = createDrawerNavigator();

const MenuScreen = () => {
  return (
    <RightDrawer.Navigator
      useLegacyImplementation
      id="RightDrawer"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <RightDrawer.Screen name="Home" component={Home} />
    </RightDrawer.Navigator>
  );
}

export default MenuScreen;


