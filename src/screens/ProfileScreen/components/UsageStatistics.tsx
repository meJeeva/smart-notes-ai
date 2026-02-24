import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNCard from '../../../components/Card'
import SNText from '../../../components/Text'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { COLORS } from '../../../styles/colors'
import { FONTS } from '../../../constants/Fonts'

const UsageStatistics = () => {
    return (
        <View style={styles.container}>
            <SNCard style={styles.cardContainer}>
                <SNText style={styles.title}>USAGE STATISTICS</SNText>
                <View style={styles.usageContainer}>
                    <SNCard style={styles.subCardContainer}>
                        <SNText style={styles.subCardTitle}>Total Recordings</SNText>
                        <SNText style={styles.subCardValue}>42</SNText>
                    </SNCard>
                    <SNCard style={styles.subCardContainer}>
                        <SNText style={styles.subCardTitle}>Token Used</SNText>
                        <SNText style={styles.subCardValue}>12,450</SNText>
                    </SNCard>
                </View>
            </SNCard>
        </View>
    )
}

export default UsageStatistics

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    usageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    title: {
        fontSize: FONT_SIZES.MD,
        color: COLORS.grey,
        fontFamily: FONTS.interMedium,
        letterSpacing: 1
    },
    cardContainer: {
        padding: 15,
        borderRadius: 20
    },
    subCardContainer: {
        backgroundColor: COLORS.bgGrey,
        marginTop: 5,
        width: '46%'
    },
    subCardTitle: {
        fontSize: FONT_SIZES.SM,
        fontFamily: FONTS.interMedium,
        color: COLORS.grey
    },
    subCardValue: {
        fontSize: 20,
        fontFamily: FONTS.interBold,
        color: COLORS.secondary
    }
})