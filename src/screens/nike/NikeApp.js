import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Modal, Alert, StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native'
import styles from '../../Styles'
import MyText from './Text'
import { images, icons, COLORS, FONTS, SIZES } from '../../theming/index'
import { Svg, Polygon } from 'react-native-svg'
import { BlurView } from "@react-native-community/blur"
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const NikeApp = (props) => {
    const { colors, dark } = useTheme()

    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")

    // console.log('Rendered')

    // Dummy Data
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);

    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "$119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "$124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "$108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);

    // Render

    function renderTrendingShoes(item, index) {
        let trendingStyle = {}

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding, }
        } else {
            trendingStyle = {}
        }

        return (
            <TouchableWithoutFeedback
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <MyText style={{ color: COLORS.black, ...FONTS.h5, marginBottom: 7 }}>{item.type}</MyText>

                <View style={[styles.shoeBox, styles.flex1, {
                    backgroundColor: item.bgColor,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10, marginRight: SIZES.padding
                }]}>

                    <View style={{ position: 'absolute', top: 0, right: 0, width: "95%", height: "100%" }}>
                        <Svg height="100%" width="100%">
                            <Polygon points="0,0 160,0 160,80" fill="white" />
                        </Svg>
                    </View>

                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            position: 'absolute', top: 30, right: -20, width: "100%", height: 80,
                            transform: [
                                { rotate: '-18deg' }
                            ]
                        }}
                    />
                    <View style={{ position: 'absolute', bottom: 10, left: 10, marginRight: 10, height: '35%', justifyContent: 'flex-end', }}>
                        <MyText style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</MyText>
                        <MyText style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</MyText>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <MyText style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</MyText>
                    <MyText style={{ ...FONTS.h3 }}>{item.price}</MyText>
                </View>
            </TouchableOpacity>
        )
    }

    function renderShoeSizes() {
        return (
            selectedItem.sizes.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 35,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedSize(item)
                        }}
                    >
                        <MyText style={{ color: selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white, ...FONTS.body4 }}>{item}</MyText>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <>
            <StatusBar backgroundColor={selectedItem === null ? colors.primary : selectedItem ? selectedItem.bgColor : colors.primary} barStyle={dark ? 'light-content' : 'dark-content'} />
            <View style={[styles.flex1, styles.container]}>
                {/* <Text style={{ color: colors.text }}>Nike App</Text>
                <MyText style={[{ color: colors.text },]}>Nike App</MyText> */}

                {/* Screen Heding */}
                <MyText style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>TRENDING</MyText>

                {/* Horizontal Slider */}
                <View style={{ height: 260, marginTop: SIZES.radius }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={trending}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderTrendingShoes(item, index)}
                    />
                </View>

                {/* Recently Viewed */}
                <View
                    style={[{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: COLORS.white
                    }, styles.recentContainerShadow]}
                >
                    <View style={{ width: 70, marginLeft: SIZES.base }}>
                        <Image
                            source={images.recentlyViewedLabel}
                            resizeMode="contain"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={recentlyViewed}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                        />
                    </View>
                </View>

                {/* Modal */}
                {selectedItem &&
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showAddToBagModal}
                        onRequestClose={() => {
                            setSelectedItem(null)
                            setSelectedSize("")
                            setShowAddToBagModal(false)
                        }}
                    >
                        <BlurView
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            blurType={dark ? "dark" : '"light"'}
                            blurAmount={20}
                            reducedTransparencyFallbackColor="white"
                        >
                            {/* Button to close modal */}
                            <TouchableOpacity
                                style={styles.absolute}
                                onPress={() => {
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                            </TouchableOpacity>

                            {/* Modal content */}
                            <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                                <View style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    ...Platform.select({
                                        android: {
                                            marginTop: 15,
                                        }
                                    })
                                }}>
                                    <Image
                                        source={selectedItem.img}
                                        resizeMode="contain"
                                        style={{
                                            width: "90%",
                                            height: 170,
                                            transform: [
                                                { rotate: '-15deg' }
                                            ]
                                        }}
                                    />
                                </View>
                                <MyText style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</MyText>
                                <MyText style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</MyText>
                                <MyText style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price}</MyText>
                                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                    <View>
                                        <MyText style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</MyText>
                                    </View>
                                    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                        {renderShoeSizes()}
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                    onPress={() => {
                                        setSelectedItem(null)
                                        setSelectedSize("")
                                        setShowAddToBagModal(false)
                                    }}
                                >
                                    <MyText style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Bag</MyText>
                                </TouchableOpacity>
                            </View>
                        </BlurView>
                    </Modal>
                }
            </View>
        </>
    )
}

export default React.memo(NikeApp)