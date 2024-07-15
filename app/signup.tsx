import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const Page = () => {
  const [countryCode, setCountryCode] = useState<string>("+92");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  const router = useRouter();

  const { signUp } = useSignUp();

  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });
      router.push({
        pathname: "/verify/[phone]",
        params: { phone: fullPhoneNumber },
      });
    } catch (err) {
      console.log("Error signing up", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code there
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.countryCodeInput}
            placeholder="Country Code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
          />
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Mobile Number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already Have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  countryCodeInput: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
    width: 80,
  },
  phoneNumberInput: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    flex: 1,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
