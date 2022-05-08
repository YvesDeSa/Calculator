import { StyleSheet } from "react-native";
import { Theme } from "./Theme";

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Theme.colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Theme.colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Theme.colors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: Theme.colors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: Theme.colors.black,
  },
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: Theme.colors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: Theme.colors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
})