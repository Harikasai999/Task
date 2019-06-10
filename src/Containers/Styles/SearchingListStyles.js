import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.1,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 5,
    borderBottomWidth: 0,
    backgroundColor: "white"
  },
  subContainer: {
    // width: 375,
    height: width / 1.36,
    backgroundColor: "#ee5253",
    borderBottomLeftRadius: width / 1.151, //300,
    borderBottomRightRadius: width / 1.151, //280,
    transform: [{ scaleX: 1.3 }],
    alignItems: "center"

    // justifyContent: "center"
  },
  headerContainer: {
    width: width / 1.151
  },
  rowData: {
    // height: width / 1.87, //width / 2.14,
    width: width / 1.15,

    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 5,

    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    margin: width / 37.5,
    padding: 15,
    borderRadius: 5
  },
  headerText: { color: "dimgray", fontSize: 12, fontWeight: "500" },
  dataText: { color: "dimgray", fontSize: 12, fontWeight: "400" },
  hospitalText: {
    color: "#37a56d",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10
  },
  available: {
    color: "dimgray",
    fontSize: 10,
    fontWeight: "400"
  },
  calederIconStyle: {
    height: 15,
    width: 15,
    tintColor: "#37a56d"
  },
  buttonStyle: {
    height: 35,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ee5253",
    borderRadius: 30
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 10,
    // padding: 10
    fontWeight: "500"
  },
  ascButtonStyle: {
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5
  },
  desButtonStyle: {
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 1
  }
});
export default styles;
