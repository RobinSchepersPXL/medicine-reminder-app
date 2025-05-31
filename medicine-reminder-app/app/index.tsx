import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useEffect, useRef} from "react";
import { useRouter } from "expo-router"; 

export default function SplashScreen() {  
        const fadeAnimated = useRef(new Animated.Value(0)).current; //This is the value for the fadeAnimated
        const scaleAnimated = useRef(new Animated.Value(1)).current; //This is the value for the scale
        const router = useRouter(); //This is the router for the navigation 
        useEffect(() => {
        // Fade in animation
            Animated.parallel([
                Animated.timing(fadeAnimated, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.spring(scaleAnimated, {
                    toValue: 1.2,
                    friction: 2,
                    tension: 160,
                    useNativeDriver: true,
                }),
            ]).start();
            const timer =setTimeout(() => {  //after 2 seconds the splash screen will be closed an the main screen will appear
                router.replace('/auth')
            },2000)
            return () => clearTimeout(timer); 
        }, []);
    return (
   
        <View style={styles.container}> 
                <Animated.View style={[
                    styles.container,
                    {
                        opacity: fadeAnimated,//this linked with the value from const fadeAnimated
                        transform: [{ scale: scaleAnimated }], //this linked with the value from const scaleAnimated
                    },
                ]}>
                    <FontAwesome6 name="medrt" size={100} color="white" /> //connection for an icon on spachscreen
                     <Text style={styles.text}>MediMind</Text>
                </Animated.View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4078B5",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
    },
    icon: {
        fontSize: 100,
        color: "#4A90E2",
        marginBottom: 20,
    },
});