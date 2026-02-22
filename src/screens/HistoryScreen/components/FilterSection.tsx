import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../styles/colors'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'
import { FONTS } from '../../../constants/Fonts'
import { FONT_SIZES } from '../../../constants/FontSizes'
import SNButton from '../../../components/Button'
import SNText from '../../../components/Text'

const filtersValue = ['All', 'Today', 'This Week', 'This Month'];

const FilterSection = () => {

    return (
        <View style={styles.container}>
            <View
                style={styles.searchBarContainer}
            >
                <ICONS.Feather name={ICONS_NAME.search} size={18} color={COLORS.grey} />
                <TextInput
                    placeholder='Search notes or summaries...'
                    style={styles.searchBar}
                />
            </View>
            <ScrollView style={styles.dateFilterContainer} horizontal showsHorizontalScrollIndicator={false}>
                {
                    filtersValue.map(item => (
                        <SNButton style={styles.dateFilter}>
                            <SNText style={styles.dateText}>{item}</SNText>
                        </SNButton>
                    ))
                }
            </ScrollView>

        </View>
    )
}

export default FilterSection

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: COLORS.bgGrey,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 6,
        borderRadius: 99,
        paddingHorizontal: 20,
        fontFamily: FONTS.interMedium,
        color: COLORS.text,
        fontSize: FONT_SIZES.MD
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    searchBar: {

    },
    dateFilterContainer: {
        paddingVertical: 10
    },
    dateFilter: {
        borderRadius: 99,
        alignItems: 'center',
        paddingHorizontal: 25,
        marginStart: 15,
        height: 40,
        backgroundColor: COLORS.bgGrey,
        elevation: 0
    },
    dateText: {
        fontFamily: FONTS.interSemiBold
    }
})