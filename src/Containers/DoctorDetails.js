/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Header from "../Components/Header.js";
import styles from "./Styles/DoctorDetailsStyles.js";
type Props = {};
var array = [
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  },
  {
    id: "4"
  },
  {
    id: "5"
  },
  {
    id: "6"
  }
];
export default class DoctorDetails extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Doctor's Profile" />
        </View>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewContainer}>
              <View style={styles.profileView}>
                <View style={[styles.container, { flexDirection: "row" }]}>
                  <View style={styles.profileImageView}>
                    <View style={styles.profileContainer}>
                      <Image
                        source={require("../Images/star.png")}
                        style={styles.starIconStyle}
                      />
                      <Text style={styles.ratingTextStyle}>4.5/5.0</Text>
                    </View>
                  </View>
                  <View style={styles.profileDataView}>
                    <Text style={styles.name}>Doctor John Doe</Text>
                    <Text style={styles.textStyle}>
                      Dentist{"\n"}BDS, MBBS {"\n"}5 years of experience{"\n"}
                      120 Consultations
                    </Text>
                    {/*<Text style={styles.textStyle}></Text>
                    <Text style={styles.textStyle}></Text>*/}
                    <Text style={styles.textHeaderStyle}>XYZ Hospital</Text>
                    <Text style={styles.textStyle}>Vasant Vihar, Delhi</Text>
                    <View style={styles.subDataView}>
                      <Image
                        source={require("../Images/calendar.png")}
                        style={styles.calederIconStyle}
                      />
                      <Text style={[styles.textStyle, { marginLeft: 5 }]}>
                        28/10/2018
                      </Text>
                    </View>
                    <View style={styles.subDataView}>
                      <Image
                        source={require("../Images/rupee.png")}
                        style={styles.calederIconStyle}
                      />
                      <Text style={[styles.textStyle, { marginLeft: 5 }]}>
                        700
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.aboutView}>
                  <Text style={styles.aboutText}>About the hospital</Text>
                  <Text style={styles.aboutDetailsText}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </Text>
                </View>
                <View style={styles.hospitalDetailView}>
                  <Text style={styles.xyzText}>XYZ Hospital</Text>
                  <View style={{ flexDirection: "row" }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {array.map((res, key) => {
                        return <View key={key} style={styles.rowData} />;
                      })}
                    </ScrollView>
                  </View>
                </View>
                <View style={styles.reviewsView}>
                  <Text style={styles.xyzText}>Reviews</Text>
                  <View style={styles.reviewsDataView}>
                    <View style={styles.circle} />
                    <View style={styles.personView}>
                      <Text style={styles.xyzPersonText}>XYZ Person</Text>
                    </View>
                  </View>
                  <Text style={[styles.aboutDetailsText, { marginTop: 10 }]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomView}>
            <View style={styles.bottomViewContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate("Search")}
              >
                <Text style={styles.buttonTextStyle}>
                  Book Online Consultation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate("Search")}
              >
                <Text style={styles.buttonTextStyle}>Book Direct Visit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
