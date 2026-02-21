import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { COLORS } from '../../styles/colors'

type SNButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPressEvent?: () => void;
  isDisable?: boolean;
  children?: ReactNode
}

const SNButton: React.FC<SNButtonProps> = ({
  onPressEvent,
  isDisable,
  children,
  style
}) => {
  return (
    <TouchableOpacity onPress={onPressEvent} disabled={isDisable} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  )
}

export default SNButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    paddingHorizontal: 15
  }
})