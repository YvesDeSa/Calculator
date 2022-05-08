import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface Props {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean
}

export function Button({ onPress, title, isBlue, isGray }: Props) {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
            ? Styles.btnGray
            : theme === "light"
              ? Styles.btnLight
              : Styles.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
              ? Styles.smallTextLight
              : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}