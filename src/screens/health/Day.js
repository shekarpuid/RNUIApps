import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Text from '../Text'
import styles from '../../Styles'

const Day = (props) => {
    const { colors, dark } = useTheme()
    return (
        <>
            <View style={styles.box1}>
                <View style={{ borderRadius: 10, padding: 5, backgroundColor: props.active }}>
                    <Text style={{ color: '#fff' }}>{props.dayname}</Text>
                </View>
            </View>
        </>
    )
}

export default React.memo(Day)