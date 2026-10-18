import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

export default function TabsLayout() {
  // iOS NativeTabs
  if (Platform.OS === "ios") {
    return (
      <NativeTabs
        backgroundColor="#EAF3FF"
        blurEffect="systemUltraThinMaterialLight"
        disableTransparentOnScrollEdge
      >
        {/* หน้าหลัก */}
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "house",
              selected: "house.fill",
            }}
            md={{
              default: "home",
              selected: "home_filled",
            }}
          />
          <NativeTabs.Trigger.Label>หน้าหลัก</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* ยาของฉัน */}
        <NativeTabs.Trigger name="medicines">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "cross.case",
              selected: "cross.case.fill",
            }}
            md={{
              default: "medication",
              selected: "medication",
            }}
          />
          <NativeTabs.Trigger.Label>ยาของฉัน</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* ปฏิทิน */}
        <NativeTabs.Trigger name="calendar">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "calendar",
              selected: "calendar",
            }}
            md={{
              default: "calendar_month",
              selected: "calendar_month",
            }}
          />
          <NativeTabs.Trigger.Label>ปฏิทิน</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* สถิติ */}
        <NativeTabs.Trigger name="insights">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "chart.bar",
              selected: "chart.bar.fill",
            }}
            md={{
              default: "bar_chart",
              selected: "bar_chart",
            }}
          />
          <NativeTabs.Trigger.Label>สถิติ</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* โปรไฟล์ */}
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "person",
              selected: "person.fill",
            }}
            md={{
              default: "person",
              selected: "person",
            }}
          />
          <NativeTabs.Trigger.Label>โปรไฟล์</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // Android  Expo Router default Tabs
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#64748B",
        tabBarStyle: {
          backgroundColor: "#EAF3FF",
          borderTopWidth: 0,
          elevation: 0,
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      {/* หน้าหลัก */}
      <Tabs.Screen
        name="index"
        options={{
          title: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ยาของฉัน */}
      <Tabs.Screen
        name="medicines"
        options={{
          title: "ยาของฉัน",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ปฏิทิน */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: "ปฏิทิน",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* สถิติ */}
      <Tabs.Screen
        name="insights"
        options={{
          title: "สถิติ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />

      {/* โปรไฟล์ */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "โปรไฟล์",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
