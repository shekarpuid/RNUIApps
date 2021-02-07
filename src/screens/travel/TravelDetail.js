import React, {useState} from 'react'
import { View, ImageBackground, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import Text from './Text'
import styles from '../../Styles'

const TravelDetail = (props) => {
    const { navigation, route } = props
    const { item } = route.params
    const { colors, dark } = useTheme()

    const [gallery, setgallery] = useState([
        { image: require('../../../assets/images/travel/rome.jpg'), title: 'Rome', key: '3' },
        { image: require('../../../assets/images/travel/tahiti.jpg'), title: 'Tahiti', key: '4' },
        { image: require('../../../assets/images/travel/island.jpg'), title: 'New Zeland', key: '2' },
        { image: { uri: 'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }, title: 'London', key: '6' },
        { image: { uri: 'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940​' }, title: 'New York', key: '7' },
        { image: { uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27' }, title: 'Switzerland', key: '1' },
    ])

    return (
        <>
            {/* <View style={[styles.flex1, styles.center]}>
                <Text style={{color: colors.text}}>Travel Detail</Text>
                <Text style={{color: colors.text}}>{item.title}</Text>
            </View> */}
            <View style={[styles.flex1, styles.bgWhite]}>
                <ImageBackground source={item.image} style={styles.travelImageBackground}
                    imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                >
                    <View style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,borderBottomLeftRadius: 30,borderBottomRightRadius: 30,backgroundColor: '#000',opacity: 0.4}}></View>
                    <Text style={styles.tagLine}>Discover Switzerland</Text>
                    <Text style={styles.placeName}>Explore the scenic beauty of {item.title}</Text>
                    <TouchableOpacity style={{ position: 'absolute', top: 15, left: 14, padding: 7, borderRadius: 40, backgroundColor: '#ff6200' }} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" color="#fff" size={22} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: 15, right: 14, padding: 7, borderRadius: 40, backgroundColor: '#ff6200' }} onPress={() => console.log('Pressed!!')}>
                        <Feather name="heart" color="#fff" size={22} />
                    </TouchableOpacity>
                </ImageBackground>


                <TouchableOpacity style={styles.bookTicketBtn}>
                    <Text style={styles.bookTicketText}>Book Now!!</Text>
                </TouchableOpacity>

                <ScrollView style={[styles.bgWhite, { top: 0 }]}>
                    <View style={{ padding: 20, }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}>About Place</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Donec ante mi, pulvinar eu ornare at, viverra a nibh. Aenean ullamcorper felis nec lorem viverra condimentum. Aliquam vitae urna urna. Integer ornare dolor vitae viverra pulvinar. Aenean efficitur purus dolor, interdum ullamcorper eros ultrices at. Fusce sit amet porta nisl, id luctus nisi. Nam pretium dictum mi sit amet sagittis.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Etiam elementum vel lacus vel sagittis. Suspendisse potenti. Aliquam tempus non nisl ut vulputate. Maecenas facilisis leo vitae metus eleifend, vel ornare lectus dictum. Aenean fermentum, dui sit amet rutrum tincidunt, nunc ante maximus nisl, non ultrices eros nibh eget magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend mauris vitae eleifend tincidunt. Duis bibendum, felis imperdiet laoreet scelerisque, erat est facilisis dui, ac scelerisque felis odio non mi. Suspendisse gravida, elit eget pharetra volutpat, lectus velit molestie orci, sed varius nunc magna id leo. Etiam non augue laoreet, facilisis diam sit amet, vulputate libero. Fusce semper nisi ac placerat ultrices. Nam tellus est, faucibus ut mi quis, tincidunt maximus nibh. Suspendisse potenti.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Phasellus aliquam est vel fringilla rutrum. Nulla maximus, diam id vestibulum commodo, nisi magna ultricies dui, non pharetra enim tortor eu nisi. Integer congue ante quis felis facilisis auctor. Praesent magna ante, vehicula vel vulputate faucibus, fermentum eget metus. Praesent nec nisl purus. Quisque placerat, libero lacinia tristique fringilla.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Lacus nulla dictum purus, sit amet mollis tortor magna sed magna. Sed eu faucibus sapien. In neque neque, efficitur vel porta quis, posuere id eros. Sed elementum magna convallis lacus blandit, sed sollicitudin nulla bibendum. Vivamus interdum leo vitae condimentum bibendum.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Duis ullamcorper urna bibendum libero porta dapibus. Fusce libero ligula, pretium at molestie et, convallis ut quam. In elementum aliquam arcu, tempor ullamcorper metus malesuada et. Nullam sit amet orci eget nisi aliquam auctor. Donec porttitor, velit id cursus commodo, nulla metus vulputate diam, et sagittis est nisi sed sapien. Ut dignissim tempus libero, id gravida neque suscipit non. Phasellus lacinia tellus at tempor volutpat. Suspendisse purus odio, dapibus eu leo vitae, ultricies pretium ex. Morbi rutrum fermentum risus, sit amet eleifend ex.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean turpis neque, venenatis ac vehicula id, gravida eu turpis. Aliquam et sem pharetra, suscipit ante et, suscipit mi. Suspendisse interdum nunc leo, non sagittis lacus pharetra in. Duis sit amet leo faucibus, lacinia enim quis, ultrices lectus. Vivamus mauris sapien, finibus sit amet turpis in, auctor tristique risus.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Morbi sollicitudin eros ut risus auctor, sit amet cursus purus finibus. Ut elit lectus, gravida ac dapibus eget, iaculis ut purus. Donec posuere leo vitae feugiat auctor. Vivamus eu nibh lectus. Nulla facilisi. Duis facilisis magna sed nulla sollicitudin sagittis. Etiam porta quam sed massa euismod, et bibendum mi pharetra. Quisque vel enim vitae nulla maximus sodales eu sed libero.</Text>
                        <Text style={{ opacity: 0.9, lineHeight: 20, marginBottom: 15, textAlign: 'justify' }}>Maecenas vel augue eget odio molestie feugiat. Nulla pharetra turpis sem, sed semper libero hendrerit at. Suspendisse arcu nibh, vestibulum sit amet est sit amet, consequat tempor arcu. Maecenas eleifend mollis rhoncus. Phasellus sed libero ut ipsum faucibus aliquet sit amet id purus. Vestibulum eget fermentum neque. Donec quis varius urna. Sed non convallis nisl, sit amet rutrum neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti.</Text>
                    </View>
                    <View style={{ paddingBottom: 30 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15, marginLeft: 20 }}>Suggested Places</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} bounces={false}
                            data={gallery}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return <View style={{ marginVertical: 10, marginLeft: 20, overflow:'hidden', borderRadius: 16 }}>
                                    <Image source={item.image} style={{ width: 150, height: 150, marginRight: 16, borderRadius: 16 }} />
                                    <View style={styles.detailImageOverlay}></View>
                                    <View style={{ position: 'absolute', bottom: 16, left: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <Feather name="map-pin" size={16} color="#fff" />
                                        <Text style={{ color: "#fff", paddingLeft: 5 }} numberOfLines={1}>{item.title}</Text>
                                    </View>
                                </View>
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default React.memo(TravelDetail)