import React from "react";
import { useColorScheme } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { LightTheme, DarkTheme, palette } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/Home";
import SearchScreen from "@screens/Search";
import DetailScreen from "@screens/Detail";
import ProfileScreen from "@screens/Profile";
import NotificationScreen from "@screens/Notification";
import { RootStackParamList, RootTabParamList } from "types/navigation";
import HeaderBlock from "@shared-components/HeaderBlock";
import StyledText from "@shared-components/StyledText";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const renderTabHeader = (route: keyof RootTabParamList) => {
    let title = "홈";
    switch (route) {
      case "Home":
        title = "홈";
        break;
      case "Search":
        title = "검색";
        break;
      case "Notification":
        title = "알림";
        break;
      case "Profile":
        title = "내 정보";
        break;
      default:
        title = "홈";
        break;
    }
    return (
      <HeaderBlock
        middleComponent={<StyledText textType="title" text={title} />}
      />
    );
  };

  const renderTabIcon = (
    route: keyof RootTabParamList,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route) {
      case "Home":
        iconName = focused ? "home" : "home-outline";
        break;
      case "Search":
        iconName = focused ? "search" : "search-outline";
        break;
      case "Notification":
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case "Profile":
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => renderTabHeader(route.name),
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route.name, focused, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Root"
          component={renderTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
