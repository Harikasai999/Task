/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import DoctorDetails from "./src/Containers/DoctorDetails";
import Search from "./src/Containers/Search";
import SearchingList from "./src/Containers/SearchingList";

const RootNavigator = createStackNavigator(
  {
    DoctorDetails: { screen: DoctorDetails },
    Search: { screen: Search },
    SearchingList: { screen: SearchingList }
  },
  {
    initialRouteName: "DoctorDetails",
    headerMode: "none"
  }
);

const AppNavigator = createAppContainer(RootNavigator);
export default AppNavigator;
