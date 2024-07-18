import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import * as SecureStore from "expo-secure-store";

export const UserInactivityProvider = ({ children }: any) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    if (appState.current.match(/background/) && nextAppState === "active") {
      const timElapsed =
        Date.now() -
        parseInt((await SecureStore.getItemAsync("startTime")) ?? "0", 10);
      if (timElapsed > 3000 && isSignedIn) {
        router.replace("/(authenticated)/(modals)/lock");
      }
    } else if (nextAppState === "background") {
      recordStartTime();
    }
    appState.current = nextAppState;
  };

  const recordStartTime = () => {
    SecureStore.setItemAsync("startTime", Date.now().toString());
  };
  return children;
};
