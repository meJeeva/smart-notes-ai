import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../styles/colors'
import { ICONS } from '../../../utils/helper'
import { ICONS_NAME } from '../../../constants/Icons'
import SNText from '../../../components/Text'
import { FONTS } from '../../../constants/Fonts'
import { FONT_SIZES } from '../../../constants/FontSizes'

const ProfileImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: 'https://st.depositphotos.com/1008939/2228/i/450/depositphotos_22285449-stock-photo-profile.jpg'
                    }}
                    style={styles.profileImage}
                />
                <View style={styles.iconEditContainer}>
                    <View style={styles.iconEdit}>
                        <ICONS.Entypo name={ICONS_NAME.edit} size={20} color={COLORS.primary} />
                    </View>
                </View>
            </View>
            <View>
                <SNText style={styles.name}>Jeeva</SNText>
                <SNText style={styles.email}>jeevaofficialjob@gmail.com</SNText>
            </View>
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 99,
    },
    imageContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 99,
        padding: 10,
        elevation: 5,
    },
    iconEdit: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        borderRadius: 99,
    },
    iconEditContainer: {
        backgroundColor: COLORS.primary,
        padding: 5,
        position: "absolute",
        bottom: 5,
        right: 5,
        borderRadius: 99
    },
    name: {
        fontFamily: FONTS.interBold,
        fontSize: FONT_SIZES.LG,
        textAlign: 'center',
        marginTop: 10
    },
    email: {
        marginTop: 3,
        color: COLORS.grey
    }
})