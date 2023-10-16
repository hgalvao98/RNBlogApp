import { Tabs } from "expo-router";
import { Image } from "react-native";
import icons from "../constants/icons";
import { COLORS } from "../constants";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: COLORS.lightGray,
        tabBarActiveTintColor: COLORS.gray,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
