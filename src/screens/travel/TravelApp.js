import React, { useState } from 'react'
import { View, Image, ImageBackground, TextInput, FlatList, TouchableOpacity, Dimensions } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { ScrollView } from "react-native-gesture-handler"
import { useTheme } from '@react-navigation/native'
import Text from './Text'
import styles from '../../Styles'

const TravelApp = (props) => {
    const { navigation } = props
    const { colors, dark } = useTheme()
    const { width, height } = Dimensions.get('window')

    const image = { uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940​" };
    const [gallery, setgallery] = useState([
        { image: { uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27' }, title: 'Switzerland', key: '1' },
        { image: require('../../../assets/images/travel/rome.jpg'), title: 'Rome', key: '3' },
        { image: require('../../../assets/images/travel/tahiti.jpg'), title: 'Tahiti', key: '4' },
        { image: require('../../../assets/images/travel/island.jpg'), title: 'New Zeland', key: '2' },
        // { image: { uri: 'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940​' }, title: 'New York', key: '7' },
        // { image: { uri: 'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }, title: 'London', key: '6' },
        { image: { uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27' }, title: 'Paris', key: '5' },
    ])
    const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }

    return (
        <View style={{ flexGrow: 1, height: '100%' }}>
            {/* Search bar */}
            <View>
                <ImageBackground source={image} style={{ width: '100%', height: 270 }}
                    imageStyle={{ borderBottomRightRadius: 65 }}
                >
                    <View style={styles.overlay}></View>
                    <View style={styles.menuBar}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Feather name="menu" size={22} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert("You don't have new notificatons!!")}>
                            <Feather name="bell" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.userName}>Hi John,</Text>
                        <Text style={styles.userText}>Where would you like to go today?</Text>
                    </View>
                    <View>
                        <TextInput style={styles.serachBox}
                            placeholder="Search Destination"
                            placeholderTextColor="#777"
                        />
                        <Feather name="search" size={22} color="#777" style={styles.searchIcon} />
                    </View>
                </ImageBackground>
            </View>

            {/* Content */}
            <ScrollView>
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Trending</Text>
                </View>
                <View style={{ paddingBottom: 30 }}>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} bounces={false}
                        data={gallery}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => {
                            return <View style={{ paddingVertical: 10, paddingLeft: 16 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('TravelDetail', { item })}>
                                    <Image source={item.image} style={{ width: 150, height: 250, marginRight: 16, borderRadius: 16 }} />
                                    <View style={styles.imageOverlay}></View>
                                    <View style={{ position: 'absolute', bottom: 16, left: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <Feather name="map-pin" size={16} color="#fff" />
                                        <Text style={{ color: "#fff", paddingLeft: 5 }} numberOfLines={1}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recently Viewed</Text>
                    <Text style={{ fontSize: 14, color: '#ff6200', fontWeight: 'bold' }}>View All</Text>
                </View>
                <View>
                    <Image source={recentImage} style={{ width: width - 32, height: 250, borderRadius: 16, marginHorizontal: 16, marginTop: 20 }} />
                    <View style={{ position: 'absolute', bottom: 16, left: 30, right: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                            <Feather name="map-pin" size={20} color="#fff" />
                            <Text style={{ color: "#fff", paddingLeft: 5, fontSize: 22 }} numberOfLines={1}>Venice</Text>
                        </View>
                        <Text style={{ color: "#fff", paddingLeft: 5, lineHeight: 20, opacity: 0.7 }}>Venice, the capital of nothern Italy's Veneto Region in the Adriatic Sea.</Text>
                    </View>
                </View>
                <View style={{ height: 30 }}></View>
            </ScrollView>
        </View>
    )
}

export default React.memo(TravelApp)