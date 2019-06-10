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
  Image,
  TouchableOpacity
} from "react-native";
import Header from "../Components/Header.js";
import styles from "./Styles/SearchingListStyles.js";
var array = [
  {
    id: "1",
    doctorName: "John Doe",
    specialized: "Dentist(5 Years)",
    degree: "MBBS, BDS",
    hospital: "XYZ Hospital",
    location: "Vasant Vihar, Delhi",
    date: "28/10/2018",
    payment: "700"
  },
  {
    id: "2",
    doctorName: "John Doe",
    specialized: "Dentist(5 Years)",
    degree: "MBBS, BDS",
    hospital: "XYZ Hospital",
    location: "Vasant Vihar, Delhi",
    date: "28/10/2018",
    payment: "700"
  },
  {
    id: "3",
    doctorName: "John Doe",
    specialized: "Dentist(5 Years)",
    degree: "MBBS, BDS",
    hospital: "XYZ Hospital",
    location: "Vasant Vihar, Delhi",
    date: "28/10/2018",
    payment: "700"
  },
  {
    id: "4",
    doctorName: "John Doe",
    specialized: "Dentist(5 Years)",
    degree: "MBBS, BDS",
    hospital: "XYZ Hospital",
    location: "Vasant Vihar, Delhi",
    date: "28/10/2018",
    payment: "700"
  }
];
type Props = {};
export default class SearchingList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View style={styles.rowData}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }} />
        <View style={{ flex: 0.6 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 0.31

                // justifyContent: "center"
              }}
            >
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  backgroundColor: "#ee5253"
                  // marginLeft: 10
                }}
              />
            </View>

            <View
              style={{
                flex: 0.37,
                backgroundColor: "white",
                // justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.headerText}>Dr. {item.doctorName}</Text>
              <Text style={styles.dataText}>
                {item.specialized}
                {"\n"}
                {item.degree}
              </Text>
              <Text style={styles.hospitalText}>{item.hospital}</Text>
              <Text style={styles.dataText}>{item.location}</Text>
            </View>

            <View
              style={{
                flex: 0.32
                // backgroundColor: "lightblue"
                // justifyContent: "center"
              }}
            >
              <Text style={styles.available}>first availabale date</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Image
                  source={require("../Images/calendar.png")}
                  style={styles.calederIconStyle}
                />
                <Text style={[styles.headerText, { marginLeft: 5 }]}>
                  {item.date}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Image
                  source={require("../Images/rupee.png")}
                  style={styles.calederIconStyle}
                />
                <Text style={[styles.headerText, { marginLeft: 5 }]}>
                  {item.payment}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            marginTop: 10,
            // backgroundColor: "lightgreen",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
            // marginHorizontal: 10
          }}
        >
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Book Online Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Book Direct Visit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
          <Header title="Search" />
        </View>
        <View style={styles.container}>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
              <View
                style={{
                  flex: 0.34,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={[styles.dataText, { marginLeft: 5 }]}>
                  Sort by stars
                </Text>
              </View>
              <View
                style={{
                  flex: 0.33,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.ascButtonStyle}>
                  <Text style={styles.buttonTextStyle}>Ascending</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 0.33,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.desButtonStyle}>
                  <Text style={[styles.buttonTextStyle, { color: "green" }]}>
                    Descending
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.34,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={[styles.dataText, { marginLeft: 5 }]}>
                  Sort by experience
                </Text>
              </View>
              <View
                style={{
                  flex: 0.33,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.ascButtonStyle}>
                  <Text style={styles.buttonTextStyle}>Ascending</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 0.33,

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.desButtonStyle}>
                  <Text style={[styles.buttonTextStyle, { color: "green" }]}>
                    Descending
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.8, alignItems: "center" }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={array}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        </View>
      </View>
    );
  }
}
