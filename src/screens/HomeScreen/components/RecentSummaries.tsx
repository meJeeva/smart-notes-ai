import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNText from '../../../components/Text'
import { FONTS } from '../../../constants/Fonts'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { COLORS } from '../../../styles/colors'
import SNCard from '../../../components/Card'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'

const RecentSummaries = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SNText style={styles.headerTitle}>Recent Summaries</SNText>
                <SNText style={styles.viewAllText}>View All</SNText>
            </View>
            <View style={styles.cardContainer}>
                <RecentSummaryItem />
                <RecentSummaryItem />
                <RecentSummaryItem />
            </View>
        </View>
    )
}

const RecentSummaryItem = () => (
    <SNCard style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
                <ICONS.Feather name={ICONS_NAME.file} size={22} color={COLORS.secondary} />
            </View>
            <View>
                <SNText style={styles.summaryTitle}>
                    Project KickOff
                </SNText>
                <SNText>
                    {new Date().toLocaleString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </SNText>
            </View>
            <View style={styles.chevronContainer}>
                <ICONS.Feather name={ICONS_NAME.chervonRight} size={15} />
            </View>
        </View>
    </SNCard>
)

export default RecentSummaries

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: FONT_SIZES.LG,
        fontFamily: FONTS.interBold
    },
    viewAllText: {
        fontFamily: FONTS.interSemiBold,
        color: COLORS.secondary
    },
    cardContainer: {
    },
    card: {
        width: '100%',
        padding: 15,
        borderRadius: 24,
        marginTop: 20
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    iconContainer: {
        backgroundColor: COLORS.lightPurple,
        padding: 18,
        borderRadius: 16
    },
    summaryTitle: {
        fontFamily: FONTS.interBold,
        fontSize: FONT_SIZES.MD
    },
    chevronContainer: {
        marginLeft: 'auto'
    }
})