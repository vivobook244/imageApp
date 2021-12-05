import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/mainScreen';



const Stack = createNativeStackNavigator();
function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen 
                    name="Main"
                    component={MainScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator