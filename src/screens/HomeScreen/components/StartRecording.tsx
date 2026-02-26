import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNCard from '../../../components/Card'
import SNButton from '../../../components/Button'
import { ICONS } from '../../../utils/helper'
import SNText from '../../../components/Text'
import { ICONS_NAME } from '../../../constants/Icons'
import { COLORS } from '../../../styles/colors'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { FONTS } from '../../../constants/Fonts'
import { SCREEN_NAMES } from '../../../constants/ScreenNames'
import { useTabNavigation } from '../../../hooks/useTabNavigation'

const StartRecording = () => {

    const navigation = useTabNavigation();

    const onHandleNavigation = () => {
        navigation.navigate(SCREEN_NAMES.record);
    }

    return (
        <SNCard style={styles.startRecordingContainer}>
            <SNButton style={styles.recordingIcon}>
                <ICONS.FontAwesome name={ICONS_NAME.mic} size={25} color={COLORS.primary} />
            </SNButton>
            <SNText style={styles.recordText}>
                Start Recording
            </SNText>
            <SNText style={styles.recordSubText}>
                Capture your thoughts, meetings, or {'\n'}
                lectures instantly with AI power.
            </SNText>

            <SNButton style={styles.beginNowButton} onPressEvent={() => onHandleNavigation()}>
                <SNText style={styles.beginNowText}>
                    Begin Now
                </SNText>
                <ICONS.Feather name={ICONS_NAME.rightArrow} size={15} color={COLORS.secondary} />
            </SNButton>
        </SNCard>
    )
}

export default StartRecording

const styles = StyleSheet.create({
    startRecordingContainer: {
        borderRadius: 24,
        backgroundColor: COLORS.secondary,
        padding: 20,
        width: '90%',
        margin: '5%',
        height: '35%'
    },
    recordingIcon: {
        backgroundColor: COLORS.bgSecondary,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    recordText: {
        color: COLORS.primary,
        fontSize: FONT_SIZES.XL,
        fontFamily: FONTS.interBold,
        marginVertical: 10,
        marginBottom: 10,
    },
    recordSubText: {
        color: COLORS.primary,
        fontSize: FONT_SIZES.MD,
        lineHeight: 20
    },
    beginNowButton: {
        marginTop: 20,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '45%',
        borderRadius: 16,
        justifyContent: 'center',
    },
    beginNowText: {
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interSemiBold,
        color: COLORS.secondary
    }
})