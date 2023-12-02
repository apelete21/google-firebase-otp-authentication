import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    height: "100%",
    paddingTop: 50,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  commandContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 40,
    shadowColor: "#000",
    padding: 30,
    shadowOffset: {
      height: 10,
      width: 5,
    },
    shadowOpacity: 0.8,
    elevation: 10,
    marginVertical: 20,
  },
  commandOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  fontSize20: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  commandPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E6A817",
  },
  statusBtn: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FE0000",
    borderRadius: 3,
    width: 100,
  },
  statusBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  Navigation: {
    position: "absolute",
    marginTop: 50,
    height: "100%",
    backgroundColor: "white",
    width: "70%",
    zIndex: 2,
    borderTopRightRadius: 30,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "800",
    position: "relative",
  },
  menuList: {
    marginHorizontal: 30,
  },
  crossBtn: {
    marginVertical: 23,
    position: "relative",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    position: "relative",
  },
  itemIcon: {
    marginRight: 25,
  },
  cross: {
    position: "absolute",
    right: "10%",
  },
});
