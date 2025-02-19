import { style } from "./style";
import React, { FC } from "react";
import { Colors, lightTheme } from "../../Utils/Colors";
import { Text, View, useColorScheme } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toastProps } from "../../Utils/type";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const toastColors = {
  light: {
    success: { bg: "#f6fff9", border: "#47C1B5", iconBg: "#47C1B5", icon: "check", iconType: IconType.Feather },
    error: { bg: "#FFF5F3", border: "#F3CBC4", iconBg: "#DF452F", icon: "exclamation", iconType: IconType.AntDesign },
    info: { bg: "#F4F8FE", border: "#9DC0EE", iconBg: "#3391B6", icon: "infocirlceo", iconType: IconType.AntDesign },
    warning: { bg: "#FFF8EC", border: "#F4D9AB", iconBg: "#FD9904", icon: "warning", iconType: IconType.AntDesign },
  },
  dark: {
    success: { bg: "#30AB81", border: "#42D58F", iconBg: "#42D58F", icon: "check", iconType: IconType.Feather },
    error: { bg: "#DF452F", border: "#DD552F", iconBg: "#DD552F", icon: "exclamation", iconType: IconType.AntDesign },
    info: { bg: "#3391B6", border: "#7CCDE9", iconBg: "#7CCDE9", icon: "infocirlceo", iconType: IconType.AntDesign },
    warning: { bg: "#FD9904", border: "#FED57D", iconBg: "#FED57D", icon: "warning", iconType: IconType.AntDesign },
  },
};

const CustomToast: FC<toastProps> = ({ title, message, type }) => {
  const { top } = useSafeAreaInsets();
  const dark = useSelector((state: RootState) => state.themeMode.defTheme) === "dark";

  const themeColors = dark ? toastColors.dark : toastColors.light;
  const { bg, border, iconBg, icon, iconType } = themeColors[type] || themeColors.info;

  return (
    <View style={[style.toastCont, { borderColor: border, marginTop: top, backgroundColor: bg }]}>
      <View style={[style.ToastIconBox, { backgroundColor: iconBg }]}>
        <Icon size={20} color={Colors.white} name={icon} type={iconType} />
      </View>
      <View>
        <Text style={[style.ToastText1, { color: dark ? Colors.white : Colors.black }]}>{title}</Text>
        <Text style={[style.ToastText2, { color: dark ? Colors.white : Colors.black }]}>{message}</Text>
      </View>
    </View>
  );
};

export default CustomToast;
