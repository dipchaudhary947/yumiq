import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform, StyleSheet, View } from "react-native";

const PRIMARY = "#2563EB";
const TAB_BACKGROUND = "#EAF3FF";

export default function TabsLayout() {
  // iOS Native Tabs
  if (Platform.OS === "ios") {
    return (
      <NativeTabs
        backgroundColor={TAB_BACKGROUND}
        blurEffect="systemUltraThinMaterialLight"
        disableTransparentOnScrollEdge
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf={{ default: "house", selected: "house.fill" }}
            md={{ default: "home", selected: "home_filled" }}
          />
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="discover">
          <NativeTabs.Trigger.Icon
            sf={{ default: "safari", selected: "safari.fill" }}
            md={{ default: "explore", selected: "explore" }}
          />
          <NativeTabs.Trigger.Label>Discover</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="generate">
          <NativeTabs.Trigger.Icon
            sf={{ default: "sparkles", selected: "sparkles" }}
            md={{ default: "auto_awesome", selected: "auto_awesome" }}
          />
          <NativeTabs.Trigger.Label>Generate</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="saved">
          <NativeTabs.Trigger.Icon
            sf={{ default: "bookmark", selected: "bookmark.fill" }}
            md={{ default: "bookmark", selected: "bookmark" }}
          />
          <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Icon
            sf={{ default: "person", selected: "person.fill" }}
            md={{ default: "person", selected: "person" }}
          />
          <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // Android Tabs
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: "#8490A5",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: TAB_BACKGROUND,
          borderTopWidth: 1,
          borderTopColor: "#DCE8FA",
          elevation: 0,
          height: 72,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="generate"
        options={{
          title: "Generate",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "800",
            color: PRIMARY,
            marginTop: 4,
          },
          tabBarIcon: () => (
            <View style={styles.generateButton}>
              <Ionicons name="sparkles" size={30} color="#FFFFFF" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  generateButton: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -29,
    borderWidth: 4,
    borderColor: TAB_BACKGROUND,
    elevation: 6,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
