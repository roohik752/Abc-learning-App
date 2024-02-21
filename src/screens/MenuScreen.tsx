import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from 'src/screens/Home';
import Sidebar from './Sidebars';
import Profile from './Profile';
import MaleProfile from './MaleProfile';
import { Dimensions } from 'react-native';
import FemaleProfile from './FemaleProfile';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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

const Container = styled.View`

  width:100%
  padding-left: ${responsiveWidth(1)}px;
  padding-right: ${responsiveWidth(1)}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(3)}px;
  padding-top: 5px;
`;


