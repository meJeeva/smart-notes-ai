import { StyleSheet, Text, View,TextProps, TextStyle } from 'react-native'
import React,{ReactNode} from 'react'
import {FONTS} from './../../constants/Fonts';

type SNTextProps = TextProps & {
    children : ReactNode;
    style?: TextStyle
}

const SNText : React.FC<SNTextProps> = ({children,style}) => {
  return (
    <Text style={[styles.default,style]}>
        {children}
    </Text>
  )
}

export default SNText

const styles = StyleSheet.create({
    default : {
        fontFamily : FONTS.interRegular
    }
})