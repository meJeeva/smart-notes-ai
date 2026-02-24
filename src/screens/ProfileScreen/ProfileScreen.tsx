import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ICONS } from '../../utils/helper';
import { ICONS_NAME } from '../../constants/Icons';
import SNText from '../../components/Text';
import { FONT_SIZES } from '../../constants/FontSizes';
import { FONTS } from '../../constants/Fonts';
import ProfileImage from './components/ProfileImage';
import UsageStatistics from './components/UsageStatistics';
import AppSettings from './components/AppSettings';
import AccountButtons from './components/AccountButtons';

const ProfileScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    setHeader();
  }, [navigation]);

  const setHeader = () => {
    navigation.setOptions({
      headerLeft: () => (
        <ICONS.Ionicons name={ICONS_NAME.back} size={20} />
      ),
      headerTitle: () => {
        return <SNText style={{
          fontSize: FONT_SIZES.LG,
          fontFamily: FONTS.interSemiBold
        }}>Profile</SNText>
      },
      headerRight: () => {
        return <ICONS.Feather name={ICONS_NAME.settings} size={20} />
      },
      headerTitleAlign: 'center',
      headerLeftContainerStyle: {
        paddingLeft: 20
      },
      headerRightContainerStyle: {
        paddingRight: 20
      }
    })
  }

  return (
    <View>
      <ProfileImage />
      <UsageStatistics />
      <AppSettings />
      <AccountButtons />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})