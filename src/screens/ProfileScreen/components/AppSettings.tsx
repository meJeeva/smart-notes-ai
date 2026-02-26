import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SNText from '../../../components/Text'
import { FONTS } from '../../../constants/Fonts'
import { FONT_SIZES } from '../../../constants/FontSizes'
import { COLORS } from '../../../styles/colors'
import SNCard from '../../../components/Card'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'

const AppSettings = () => {
    return (
        <View style={styles.container}>
            <SNText style={styles.title}>APP SETTINGS</SNText>
            <SNCard style={styles.settingsItem}>
                <View style={styles.settingItemContainer}>
                    <View style={styles.iconView}>
                        <View style={styles.iconContainer}>
                            <ICONS.AntDesign name={ICONS_NAME.user} size={20} color={COLORS.secondary} />
                        </View>
                        <View>
                            <SNText style={styles.itemTitle}>AI Model Preferences</SNText>
                            <SNText style={styles.itemSubTitle}>Currently: GPT-4</SNText>
                        </View>
                    </View>
                    <ICONS.Feather name={ICONS_NAME.chervonRight} size={15} />
                </View>
                <View style={styles.settingItemContainer}>
                    <View style={styles.iconView}>
                        <View style={styles.iconContainer}>
                            <ICONS.Feather name={ICONS_NAME.delete} size={20} color={COLORS.secondary} />
                        </View>
                        <View>
                            <SNText style={styles.itemTitle}>AI Model Preferences</SNText>
                            <SNText style={styles.itemSubTitle}>Currently: GPT-4</SNText>
                        </View>
                    </View>
                    <ICONS.Feather name={ICONS_NAME.chervonRight} size={15} />
                </View>
                <View style={styles.settingItemContainer}>
                    <View style={styles.iconView}>
                        <View style={styles.iconContainer}>
                            <ICONS.Feather name={ICONS_NAME.notification} size={20} color={COLORS.secondary} />
                        </View>
                        <View>
                            <SNText style={styles.itemTitle}>AI Model Preferences</SNText>
                            <SNText style={styles.itemSubTitle}>Currently: GPT-4</SNText>
                        </View>
                    </View>
                    <ICONS.Feather name={ICONS_NAME.chervonRight} size={15} />
                </View>
            </SNCard>
        </View>
    )
}

export default AppSettings

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
    settingsItem: {
        borderRadius: 20,
        marginTop: 10,
        padding: 0
    },
    iconContainer: {
        backgroundColor: COLORS.lightPurple,
        padding: 18,
        borderRadius: 16
    },
    settingItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.bgGrey,
        paddingHorizontal: 18,
        paddingVertical: 12
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    itemTitle: {
        fontSize: FONT_SIZES.MD,
        fontFamily: FONTS.interMedium,
    },
    itemSubTitle: {
        fontSize: FONT_SIZES.SM,
        fontFamily: FONTS.interMedium,
        color: COLORS.grey
    }
})