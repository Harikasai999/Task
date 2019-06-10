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
  headerContainer: {
    flex: 0.15,
    marginLeft: 15,
    // alignItems: "center",
    justifyContent: "center"
  },
  headerMiddleContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  headerText: { color: "#ee5253", fontSize: 20, fontWeight: "600" },
  iconStyle: { height: 20, width: 20, tintColor: "#ee5253" },
  name: { color: "black", fontSize: 16, fontWeight: "600" },
  textStyle: { color: "black", fontSize: 12, fontWeight: "400" },
  profileView: { flex: 0.3 },
  profileImageView: { flex: 0.5, marginLeft: 15 },
  profileDataView: { flex: 0.5 },
  profileContainer: {
    height: 160,
    width: 150,
    backgroundColor: "#ee5253",
    borderRadius: 5,
    flexDirection: "row"
  },
  subDataView: { flexDirection: "row", marginTop: 5 },
  aboutView: { flex: 0.2, marginLeft: 15 },
  hospitalDetailView: { flex: 0.3, marginLeft: 15 },
  reviewsDataView: { flexDirection: "row", marginTop: 10 },
  personView: { justifyContent: "center", marginLeft: 10 },
  textHeaderStyle: {
    color: "#37a56d"
  },
  ratingTextStyle: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 12,
    marginLeft: 5
  },
  starIconStyle: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginTop: 10
  },
  calederIconStyle: {
    height: 15,
    width: 15,
    tintColor: "#37a56d"
  },
  aboutText: {
    color: "#ee5253",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30
  },
  aboutDetailsText: {
    color: "black",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5
  },
  xyzText: {
    color: "#ee5253",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30
  },
  rowData: {
    height: 80,
    width: 80,
    borderRadius: 5,
    backgroundColor: "#ee5253",
    marginRight: 20,
    marginTop: 10
    // margin: 10
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#ee5253"
  },
  xyzPersonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "400"
  },
  reviewsView: {
    flex: 0.5,
    marginLeft: 15,
    marginBottom: 30
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 30
  },
  bottomView: {
    // marginLeft: 15,
    // marginBottom: 30,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 5,
    borderBottomWidth: 0,
    backgroundColor: "white"
  },
  bottomViewContainer: {
    height: 60,
    marginHorizontal: 15,
    // marginTop: 10,
    // marginBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonStyle: {
    height: 35,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ee5253",
    borderRadius: 30
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 12,
    padding: 10,
    fontWeight: "600"
  }
});
export default styles;
