import { useAssets } from "expo-asset";
import { Video, ResizeMode } from "expo-av";
import { View, Text, StyleSheet } from "react-native";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View style={{ padding: 20, marginTop: 80 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
});
