import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '../constants/ScreenNames';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import BottomTabNavigation from './BottomTabNavigation';
import SettingScreen from '../screens/SettingScreen/SettingScreen';

export type RootParamsList = {
    BottomTab: undefined;
    Notification: undefined;
    Setting: undefined;
}

const Stack = createNativeStackNavigator<RootParamsList>();

const RootStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREEN_NAMES.bottomTab} component={BottomTabNavigation} options={{
                headerShown: false
            }} />
            <Stack.Screen name={SCREEN_NAMES.notification} component={NotificationScreen} />
            <Stack.Screen name={SCREEN_NAMES.setting} component={SettingScreen} />
        </Stack.Navigator>
    )
}

export default RootStackNavigation

const styles = StyleSheet.create({})