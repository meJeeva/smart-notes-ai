import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../utils/helper';
import { ICONS_NAME } from '../../constants/Icons';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../styles/colors';
import SNText from '../../components/Text';
import FilterSection from './components/FilterSection';
import RenderHistory from './components/RenderHistory';

const HistoryScreen = () => {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <FilterSection />
      <RenderHistory />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
})