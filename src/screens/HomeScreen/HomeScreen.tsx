import { Image, RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import SNText from '../../components/Text'
import { FONT_SIZES } from '../../constants/FontSizes'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ICONS } from '../../utils/helper'
import { ICONS_NAME } from '../../constants/Icons'
import { FONTS } from '../../constants/Fonts'
import { COLORS } from '../../styles/colors'
import StartRecording from './components/StartRecording'
import TotalUsage from './components/TotalUsage'
import RecentSummaries from './components/RecentSummaries'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { SCREEN_NAMES } from '../../constants/ScreenNames'

const HomeScreen = () => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const navigation = useNavigation();
  const bottomTabBarHeight = useBottomTabBarHeight();

  useFocusEffect(
    useCallback(() => {
      header();
    }, [])
  )

  const header = () => {
    navigation.setOptions({
      headerLeft: () => (
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s'
          }}
          resizeMode='contain'
          style={styles.headerLeft}
        />
      ),
      headerTitle: () => (
        <View>
          <SNText style={styles.headerTitle}>Jeeva</SNText>
          <SNText>Ready to capture ideas?</SNText>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.headerRightContainer} onPress={onHandleNavigateNotification}>
          <ICONS.Feather name={ICONS_NAME.notification} size={20} />
        </TouchableOpacity>
      )
    });
  }

  function onHandleNavigateNotification() {
    navigation.navigate(SCREEN_NAMES.notification);
  }

  const onHandleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottomTabBarHeight
        }}
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onHandleRefresh} />}
      >
        <StartRecording />
        <TotalUsage />
        <RecentSummaries />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerLeft: {
    borderRadius: 99,
    marginHorizontal: 10,
    height: 40,
    width: 40
  },
  headerTitle: {
    fontSize: FONT_SIZES.LG,
    fontFamily: FONTS.interBold
  },
  headerRightContainer: {
    backgroundColor: COLORS.bgGrey,
    padding: 10,
    borderRadius: 99,
    marginEnd: 20
  },
  container: {
    flex: 1,
  },
})