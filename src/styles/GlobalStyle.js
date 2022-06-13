import { StyleSheet } from "react-native";
import { myColors } from "./Colors";
export const Styles = StyleSheet.create({
  // Styling Button
  btnLight: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 14,
    backgroundColor: myColors.pinkDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 14,
    backgroundColor: myColors.redDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnBlue: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 14,
    backgroundColor: myColors.redDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 14,
    backgroundColor: myColors.dark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.white,
  },

  // Styling Keyboard
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },

  viewBottom: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
    backgroundColor: myColors.pinkLight,
    paddingBottom: 100
  },

  screenFirstNumber: {
    color: myColors.black,
    flex:1,
    justifyContent:"flex-end",
    paddingHorizontal: 15,
    fontWeight: "400",
    backgroundColor: myColors.gray,
    width: "100%",
  },
});
