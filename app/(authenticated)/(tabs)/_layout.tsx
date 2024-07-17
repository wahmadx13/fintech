import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint="extraLight"
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: "Invest ",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="line-chart" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer ",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="exchange" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: "Crypto ",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bitcoin" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="lifestyle"
        options={{
          title: "Lifestyle ",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="th" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
