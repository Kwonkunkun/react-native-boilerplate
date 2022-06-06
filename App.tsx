import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, useColorScheme, LogBox, Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import StorybookUIRoot from "./.storybook/Storybook";

LogBox.ignoreAllLogs();

// const IS_STORY_BOOK_MODE = true;
const IS_STORY_BOOK_MODE = false;

const App = () => {
  return (
    <React.Fragment>
      {IS_STORY_BOOK_MODE ? <StoryBookRoot /> : <DefaultRoot />}
    </React.Fragment>
  );
};

const DefaultRoot = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
    SplashScreen.hide();

    // //여기 추후에 setting 다되면 splash hide되게 수정
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 750);
  }, [scheme, isDarkMode]);
  return (
    <>
      <Navigation />
    </>
  );
};

// storybook일 경우
const StoryBookRoot = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <StorybookUIRoot />;
};

export default App;
