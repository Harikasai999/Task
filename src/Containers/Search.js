/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "../Components/Header.js";
import styles from "./Styles/SearchStyles.js";
var array = [
  {
    id: "1",
    disease: "Opthamalogy"
  },
  {
    id: "2",
    disease: "Dental"
  },
  {
    id: "3",
    disease: "Cardiology"
  },
  {
    id: "4",
    disease: "Neurology"
  }
];
type Props = {};
export default class Search extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("SearchingList")}
    >
      <View style={styles.rowData}>
        <Text>{item.disease}</Text>
      </View>
    </TouchableOpacity>
  );
  onChangeText = text => {
    this.setState({
      text: text
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Home" />
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.searchInputView}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={this.state.text}
                onChangeText={this.onChangeText}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <FlatList
              data={array}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              numColumns={2}
            />
          </View>
        </View>
      </View>
    );
  }
}
