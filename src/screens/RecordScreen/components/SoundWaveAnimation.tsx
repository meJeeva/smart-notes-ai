import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../styles/colors'

const SoundWaveAnimation = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.wave, styles.waveOne]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveThree]} />
            <View style={[styles.wave, styles.waveFour]} />
            <View style={[styles.wave, styles.waveThree]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveFour]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveOne]} />
            <View style={[styles.wave, styles.waveThree]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveFour]} />
            <View style={[styles.wave, styles.waveThree]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveFour]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveOne]} />
            <View style={[styles.wave, styles.waveThree]} />
            <View style={[styles.wave, styles.waveTwo]} />
            <View style={[styles.wave, styles.waveOne]} />
        </View>
    )
}

export default SoundWaveAnimation

const styles = StyleSheet.create({
    waveOne: {
        backgroundColor: COLORS.secondary,
    },
    waveTwo: {
        height: 140,
        backgroundColor: COLORS.secondary,
    },
    waveThree: {
        height: 180,
        backgroundColor: COLORS.secondary,
    },
    waveFour: {
        height: 220,
        backgroundColor: COLORS.secondary,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wave: {
        height: 100,
        width: 6,
        borderRadius: 99,
        marginHorizontal: 2,
    }
})