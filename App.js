import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat"
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import BuildingScreen from './app/screens/BuildingScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

//config
import Colors from './app/config/Colors'

export default function App() {

  const [fontsLoaded] = useFonts({
    // Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="BuildingScreen" component={BuildingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Happy Coding :)

