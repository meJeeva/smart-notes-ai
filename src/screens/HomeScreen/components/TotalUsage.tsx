import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNCard from '../../../components/Card'
import SNText from '../../../components/Text'
import { COLORS } from '../../../styles/colors'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { FONTS } from '../../../constants/Fonts'

const TotalUsage = () => {
    return (
        <SNCard style={styles.container}>
            <View style={styles.usageContainer}>
                <View>
                    <SNText style={styles.usageTitle}>Today's Usage</SNText>
                    <SNText style={styles.usageSubTitle}>AI Token Remaining</SNText>
                </View>
                <View>
                    <SNText style={styles.usageCount}>1,240<SNText style={styles.usageSubCount}>/5,000</SNText></SNText>
                </View>
            </View>
            <View style={styles.mainProgressBar}>
                <View style={styles.progressBar} />
            </View>
            <View style={styles.planResetContainer}>
                <ICONS.MaterialIcons name={ICONS_NAME.info} size={20} color={COLORS.secondary} />
                <SNText style={styles.planResetText}>Your plan resets in 8 hours</SNText>
            </View>
        </SNCard>
    )
}

export default TotalUsage

const styles = StyleSheet.create({
    container: {
        height: '20%',
        marginVertical: 10,
        marginHorizontal: '5%',
        width: '90%',
        borderColor: COLORS.bgGrey,
        borderWidth: 1,
        padding: 20,
        borderRadius: 25
    },
    usageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    usageTitle: {
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interBold
    },
    usageSubTitle: {
        fontSize: 14,
        marginTop: 2
    },
    usageCount: {
        fontSize: 16,
        fontFamily: FONTS.interBold
    },
    usageSubCount: {
        fontSize: 15,
        color: COLORS.grey
    },
    mainProgressBar: {
        height: 20,
        backgroundColor: COLORS.bgGrey,
        width: '100%',
        marginVertical: 10,
        borderRadius: 99,
        position: 'relative'
    },
    progressBar: {
        height: 20,
        backgroundColor: COLORS.secondary,
        width: '40%',
        borderRadius: 99,
    },
    planResetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    planResetText: {
        color: COLORS.grey
    }
})