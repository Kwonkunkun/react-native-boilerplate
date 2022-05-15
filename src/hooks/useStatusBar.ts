import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const useStatusBar = () => {
  const height =
    Platform.OS === "ios"
      ? getStatusBarHeight()
      : StatusBar.currentHeight ?? 24;

  return { height };
};

export default useStatusBar;
