import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
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
  iconStyle: { height: 20, width: 20, tintColor: "#ee5253" }
});
export default styles;
