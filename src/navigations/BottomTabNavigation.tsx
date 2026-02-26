import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import { SCREEN_NAMES } from '../constants/ScreenNames';
import { ICONS } from '../utils/helper';
import { COLORS } from './../styles/colors'
import RecordScreen from '../screens/RecordScreen/RecordScreen';


export type BottomTabProps = {
    [SCREEN_NAMES.home]: undefined;
    [SCREEN_NAMES.profile]: { userId: string };
    [SCREEN_NAMES.record]: undefined;
    [SCREEN_NAMES.history]: undefined;
}


const BottomTab = createBottomTabNavigator<BottomTabProps>();

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let name = '';
                    if (SCREEN_NAMES.home === route.name) name = 'home'
                    else if (SCREEN_NAMES.history === route.name) name = 'history'
                    else if (SCREEN_NAMES.profile === route.name) name = 'person'
                    else return <ICONS.Feather name='mic' size={20} color={color} />

                    return <ICONS.Octicons name={name} size={20} color={color} />;
                },
                tabBarActiveTintColor: COLORS.secondary,
                tabBarInactiveTintColor: COLORS.inactiveIcon,
            })}
        >
            <BottomTab.Screen
                name={SCREEN_NAMES.home}
                component={HomeScreen}
            />
            <BottomTab.Screen
                name={SCREEN_NAMES.record}
                component={RecordScreen}
            />
            <BottomTab.Screen
                name={SCREEN_NAMES.history}
                component={HistoryScreen}
            />
            <BottomTab.Screen
                name={SCREEN_NAMES.profile}
                component={ProfileScreen}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})