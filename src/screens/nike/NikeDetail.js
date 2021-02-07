import React from 'react'
import {View, Text} from 'react-native'
import { useTheme } from '@react-navigation/native'
import styles from '../../Styles'

const NikeDetail = (props) => {
    const {colors, dark} = useTheme()
    return (
        <>
            <View style={[styles.flex1, styles.center]}>
                <Text style={{color: colors.text}}>Nike Detail</Text>
            </View>
        </>
    )
}

export default React.memo(NikeDetail)