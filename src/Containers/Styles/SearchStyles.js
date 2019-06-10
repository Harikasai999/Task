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
    transform: [{ scaleX: 1.2 }],
    alignItems: "center"

    // justifyContent: "center"
  },
  rowData: {
    height: width / 3.75,
    width: width / 2.5,

    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 5,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: width / 25
  },
  searchInputView: {
    marginTop: 50
  },
  inputStyle: {
    height: 55,
    backgroundColor: "white",
    width: 250,
    borderRadius: 30,
    paddingTop: 5,
    paddingLeft: 20
  }
});
export default styles;
