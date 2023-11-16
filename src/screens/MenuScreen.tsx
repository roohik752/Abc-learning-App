import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabRouter } from '@react-navigation/native';
import React from 'react';
import Home from 'src/screens/Home';
import Sidebar from './Sidebars';


const Drawer = createDrawerNavigator();

const MenuScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MenuScreen;


