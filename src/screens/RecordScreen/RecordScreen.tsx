import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../utils/helper';
import { ICONS_NAME } from '../../constants/Icons';
import SNText from '../../components/Text';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../styles/colors';
import SoundWaveAnimation from './components/SoundWaveAnimation';
import { FONT_SIZES } from '../../constants/FontSizes';
import LiveTranscript from './components/LiveTranscript';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const RecordScreen = () => {

  const navigation = useNavigation();
  const bottomTabHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    header();
  }, []);

  const header = () => {
    navigation.setOptions({
      headerLeft: () => (
        <ICONS.Ionicons name={ICONS_NAME.close} size={20} />
      ),
      headerRight: () => (
        <ICONS.Feather name={ICONS_NAME.settings} size={20} />
      ),
      headerTitle: () => (
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginEnd: 40
        }}>
          <ICONS.Entypo name={ICONS_NAME.dot} size={40} color={COLORS.danger} />
          <SNText style={{
            fontFamily: FONTS.interMedium,
            fontSize: 18,
          }}>
            Recording....
          </SNText>
        </View>
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{
        paddingBottom: bottomTabHeight
      }}>
        <View style={styles.waveContainer}>
          <SoundWaveAnimation />
          <SNText style={styles.timer}>02:45</SNText>
        </View>
        <LiveTranscript />
      </ScrollView>
    </View>
  )
}

export default RecordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  timer: {
    textAlign: "center",
    marginTop: 50,
    fontSize: FONT_SIZES.HERO,
    fontFamily: FONTS.interBold
  },
  waveContainer: {
    marginVertical: 50,
  }
})