import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Page;
