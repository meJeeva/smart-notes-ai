import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNText from '../../../components/Text'
import SNCard from '../../../components/Card'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'
import { COLORS } from '../../../styles/colors'
import SNButton from '../../../components/Button'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { FONTS } from '../../../constants/Fonts'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const RenderHistory = () => {

    const bottomTabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: bottomTabBarHeight
            }}>
                <SNText style={styles.titleText}>TODAY</SNText>
                <HistoryItem />
                <HistoryItem />
                <SNText style={styles.titleText}>YESTERDAY</SNText>
                <HistoryItem />
                <SNText style={styles.titleText}>OCTOBER 2025</SNText>
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
            </ScrollView>
        </View>
    )
}

const HistoryItem = () => (
    <SNCard style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
                <ICONS.Feather name={ICONS_NAME.file} size={22} color={COLORS.secondary} />
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <SNText style={styles.summaryTitle}>
                        Project KickOff
                    </SNText>

                </View>
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
            <View style={styles.tokenContainer}>
                <SNButton style={styles.tokenButton}>
                    <SNText style={styles.tokenText}>
                        850 TOKENS
                    </SNText>
                </SNButton>
                <ICONS.Feather name={ICONS_NAME.chervonRight} size={15} />
            </View>
        </View>
    </SNCard>
)

export default RenderHistory

const styles = StyleSheet.create({
    titleText: {
        marginTop: 10,
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interSemiBold,
        letterSpacing: 1
    },
    card: {
        width: '100%',
        padding: 15,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: COLORS.bgGrey,
        marginTop: 10
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'space-around'
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
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tokenButton: {
        padding: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: COLORS.bgSecondary,
        backgroundColor: COLORS.lightPurple
    },
    tokenText: {
        fontSize: FONT_SIZES.XS,
        fontFamily: FONTS.interSemiBold,
        color: COLORS.secondary
    },
    tokenContainer: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        gap: 10
    },
    container: {
        marginHorizontal: 20,
    }
})