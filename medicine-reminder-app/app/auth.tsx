import { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {LinearGradient} from "expo-linear-gradient";

const { width, height } = Dimensions.get("window"); // Get the dimensions of the window

    const [hasBiometrics, setHasBiometrics] = useState(false); // Check if the device has biometrics
    const [isAuthenticating, setIsAuthenticating] = useState(false); // State to manage authentication process
    const [error, setError] = useState(null); // State to manage error messages
export default function AuthScreen() {

    return (
        <LinearGradient colors={["#004E98", "#ABC0C4"]}>
            <View>
                <View>
                <FontAwesome6 name="medrt" size={100} color="white"/>
                </View>
                <Text>
                    MediMind
                </Text>
                <Text>
                    Your Personal Medication Mind
                </Text>
                <View>
                    <Text>
                        Welcome Back
                    </Text>
                    <Text>
                        {hasBiometrics ? "Use face ID/TouchID or PIN to access MediMind" : "Enter your PIN to access MediMind"}
                    </Text>
                    <TouchableOpacity>
                        <FontAwesome6 name={hasBiometrics ?  "fingerprint" : "key"} size={24} color="white" />
                    </TouchableOpacity>

                    <Text>
                        {isAuthenticating ? "Verifyning..." : hasBiometrics ? "Authenticate" : "Enter your PIN"}
                    </Text>
                    {error && <View>
                        <FontAwesome6 name="exclamation-triangle" size={24} color="red" />
                        <Text>Error: {error}</Text>
                        </View>}
 
                </View>
            </View>
        </LinearGradient>
    )
}
