import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => (     // if user is logged IN
    <NavigationContainer>
        {/* // if user is logged in */}
        <Stack.Navigator 
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen'  component={HomeScreen} />
            <Stack.Screen name='NewPostScreen'  component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (      // if user is NOT logged in
    <NavigationContainer>
        {/* if user is NOT logged in */}
        <Stack.Navigator 
            initialRouteName='LoginScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='LoginScreen'  component={LoginScreen} />
            <Stack.Screen name='SignupScreen'  component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)