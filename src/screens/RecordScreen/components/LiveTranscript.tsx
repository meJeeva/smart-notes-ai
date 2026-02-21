import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../styles/colors'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'
import SNText from '../../../components/Text'
import { FONTS } from '../../../constants/Fonts'
import SNButton from '../../../components/Button'
import { FONT_SIZES } from '../../../constants/FontSizes'

const LiveTranscript = () => {
    return (
        <View style={{
            marginHorizontal: '8%',
        }}>
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <ICONS.Octicons name={ICONS_NAME.blinking} color={COLORS.secondary} />
                    <SNText style={styles.title}>LIVE TRANSCRIPT</SNText>
                </View>
                <SNText style={styles.transcriptText}>
                    We are currently discussing the
                    architecture of the new neural engine
                    and how it integrates with the existing
                    mobile framework. The latency looks
                    minimal and the context window is
                    expanding as we speak...
                </SNText>
            </View>
            <View style={{
                marginTop: 20
            }}>
                <SNButton style={styles.stopButton}>
                    <ICONS.FontAwesome5 name={ICONS_NAME.record} size={20} color={COLORS.primary} />
                    <SNText style={styles.stopButtonText}>Stop & Summarize</SNText>
                </SNButton>
                <SNButton style={[styles.stopButton, styles.cancelButton]}>
                    <SNText style={[styles.stopButtonText, styles.cancelText]}>Cancel & Discard</SNText>
                </SNButton>
            </View>
        </View>
    )
}

export default LiveTranscript

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGrey,
        padding: 20,
        borderRadius: 24,
        height: 200
    },
    title: {
        color: COLORS.secondary,
        fontFamily: FONTS.interBold,
        letterSpacing: 1
    },
    transcriptText: {
        fontFamily: FONTS.interMedium,
        marginTop: 10,
        lineHeight: 20,
        color: COLORS.grey,
        fontSize: 16
    },
    stopButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 24,
        marginVertical: 5
    },
    stopButtonText: {
        color: COLORS.primary,
        fontFamily: FONTS.interBold,
        fontSize: FONT_SIZES.LG
    },
    cancelButton: {
        backgroundColor: COLORS.primary
    },
    cancelText: {
        color: COLORS.grey,
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interSemiBold
    }
})