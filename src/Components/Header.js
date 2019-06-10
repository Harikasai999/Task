import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles/HeaderStyles.js";
type Props = {};
export default class Search extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../Images/menu.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.headerMiddleContainer}>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </View>
        <View style={styles.headerContainer} />
      </View>
    );
  }
}
