import React from "react";
import {
	View,
	Text,
} from "react-native";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from './ActionReducers/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import DrawerContent from './Components/DrawerContent/DrawerContent';

import  Splash from '../src/Screens/Splash/Splash';
import  SignIn from '../src/Screens/SignIn/SignIn';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();






function MainRouter() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				
				<Stack.Screen name="SignIn" component={SignIn} />
				{/* <Stack.Screen name="Splash" component={Splash} /> */}
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}


function Router() {
	return (
	  <Provider store={store}>
		<MainRouter/>
	  </Provider>
	);
  }



export default Router;
