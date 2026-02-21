import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ICONS } from '../utils/helper';
import { ICONS_NAME } from '../constants/Icons';
import { FONTS } from '../constants/Fonts';
import { COLORS } from '../styles/colors';
import SNText from '../components/Text';

const HistoryScreen = () => {


  const navigation = useNavigation();
  const bottomTabHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    header();
  }, []);

  const header = () => {
    navigation.setOptions({
      headerLeft: () => (
        <ICONS.Ionicons name={ICONS_NAME.back} size={20} />
      ),
      headerRight: () => (
        <ICONS.Entypo name={ICONS_NAME.dots} size={20} />
      ),
      headerTitle: () => (
        <SNText style={{
          fontFamily: FONTS.interBold,
          fontSize: 18,
        }}>
          History
        </SNText>
      ),
      headerTitleAlign: 'center',
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerRightContainerStyle: {
        paddingRight: 20,
      },
      headerShadowVisible: false
    })
  }

  return (
    <View>
      <Text>HistoryScreen</Text>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})