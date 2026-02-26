import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNText from '../../../components/Text'
import { FONTS } from '../../../constants/Fonts'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { COLORS } from '../../../styles/colors'
import SNButton from '../../../components/Button'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'

const AccountButtons = () => {
    return (
        <View style={styles.container}>
            <SNText style={styles.title}>ACCOUNT</SNText>
            <SNButton style={styles.upgradeButton}>
                <ICONS.SimpleLineIcons name={ICONS_NAME.badge} size={25} color={COLORS.primary} />
                <SNText style={styles.upgradeText}>Upgrade to smart note pro</SNText>
            </SNButton>
            <SNButton style={[styles.upgradeButton, styles.signOut]}>
                <ICONS.Ionicons name={ICONS_NAME.exit} size={25} color={COLORS.danger} />
                <SNText style={[styles.upgradeText, styles.signOutText]}>Sign Out</SNText>
            </SNButton>
        </View>
    )
}

export default AccountButtons

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginStart: 10
    },
    title: {
        fontFamily: FONTS.interMedium,
        fontSize: FONT_SIZES.MD,
        color: COLORS.grey,
        letterSpacing: 1
    },
    upgradeButton: {
        borderRadius: 24,
        padding: 10,
        backgroundColor: COLORS.secondary,
        paddingVertical: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    upgradeText: {
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interMedium,
        color: COLORS.primary,
        textAlign: 'center'
    },
    signOut: {
        backgroundColor: COLORS.primary
    },
    signOutText: {
        color: COLORS.danger
    }
})