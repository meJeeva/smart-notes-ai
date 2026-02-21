import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS } from '../../styles/colors'

type SNCardProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SNCard: React.FC<SNCardProps> = ({
  children,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default SNCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
  }
})