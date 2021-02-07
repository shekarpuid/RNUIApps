import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar} from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Carousel from 'react-native-anchor-carousel'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'
import MyText from './Text'
import styles from '../../Styles'

const MovieProfile = (props) => {
    const { colors, dark } = useTheme()
    const { width, height } = Dimensions.get('window')
    const [background, setBackground] = useState({
        uri: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
        name: 'Avengers: End Game'
    })

    const [gallery, setgallery] = useState([

        { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', key: '1' },
        {
            image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II', key: '2'
        },
        { image: 'https://miro.medium.com/max/700/0*SlniYnTop92-Ql5X.jpeg', title: 'Star Wars', key: '3' },
        { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', key: '4' },
    ]);


    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor='#000' barStyle='light-content' />
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
                    <Image source={{ uri: background.uri }} style={[styles.ImageBg]} blurRadius={0.4} />
                    <MyText style={{ color: 'white', position: 'absolute', top: 15, left: 14, fontWeight: 'bold', fontSize: 24 }}>{background.name}</MyText>
                </View>
            </View>
        </>
    )
}

export default React.memo(MovieProfile)