import React from 'react'
import {ScrollView, View} from 'react-native'
import { useTheme } from '@react-navigation/native'
import Text from './Text'
import styles from '../../Styles'
import RainbowCharts from './RainbowCharts'
import Charts from './Charts'

const ChartsApp = (props) => {
    const {colors, dark} = useTheme()
    return (
        <>
            <ScrollView>
                <Text style={{color: colors.primary, alignSelf: 'center', fontSize: 25, fontWeight: 'bold',paddingVertical: 10}}>Charts Kit</Text>
                <Charts />
                {/* <RainbowCharts /> */}
            </ScrollView>
        </>
    )
}

export default React.memo(ChartsApp)