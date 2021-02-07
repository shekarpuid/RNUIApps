import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useTheme } from '@react-navigation/native'
import { FONTS } from '../theming/index'
import styles from '../Styles'
import DragAndDropFlatlist from './utils/DragAndDropFlatlist'

const Home = (props) => {
    const {navigation} = props
    const {colors, dark} = useTheme()
    return (
        <>
            <View style={[styles.flex1, styles.center]}>
                <Text style={[{color: colors.text, fontFamily: "CarmenSans-SemiBold", fontSize: 35}]}>Home</Text>
                {/* <Text style={[{color: colors.text, fontSize: 35}]}>Home</Text> */}
                <TouchableOpacity onPress={() => navigation.navigate('DragAndDropFlatlist')}
                    style={styles.button}
                >
                    <Text style={{color: '#fff'}}>Drag and Drop Flatlist</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FlatListInfiniteScroll')}
                    style={styles.button}
                >
                    <Text style={{color: '#fff'}}>FlatList Infinite Scroll</Text>
                </TouchableOpacity>
            </View>
            {/* <DragAndDropFlatlist /> */}
        </>
    )
}

export default React.memo(Home)