import React from 'react'
import { Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../Styles'

const Carousels = (props) => {
    const { navigation } = props
    const { colors, dark } = useTheme()
    return (
        <>
            <ScrollView contentContainerStyle={[styles.flex1, styles.horizontalCenter, styles.mt10]}>
                <Text style={[styles.h1, { color: colors.primary }]}>Carousels</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CardsCarousel')}>
                    <Text style={[styles.h5, styles.mb10, { color: colors.text }]}>#1. Cards Carousel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ShoppingBagsCarousel')}>
                    <Text style={[styles.h5, styles.mb10, { color: colors.text }]}>#2. Zara Shopping Bag Carousel</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default React.memo(Carousels)