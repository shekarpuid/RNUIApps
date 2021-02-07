import React from 'react'
import { Image, FlatList, View, Text, Animated, StatusBar, Dimensions, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import styles from '../../Styles'

const { width, height } = Dimensions.get('screen')
const ITEM_WIDTH = width
const ITEM_HEIGHT = height * .75
const DOT_SIZE = 8
const DOT_SPACING = 8
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

const images = [
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
]

const product = {
    title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
    description: [
        'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
    ],
    price: '29.99£'
}

const ShoppingBagsCarousel = (props) => {
    const { colors, dark } = useTheme()
    const scrollY = React.useRef(new Animated.Value(0)).current

    console.log(scrollY)

    return (
        <>
            <StatusBar hidden />
            <View style={{ height: ITEM_HEIGHT, overflow: 'hidden', flex: 1 }}>
                {/* <Text style={{color: colors.text}}>ShoppingBagsCarousel</Text> */}

                <Animated.FlatList
                    data={images} keyExtractor={(_, index) => index.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    // pagingEnabled
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate='fast'
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={({ item }) => {
                        return <View style={[styles.flex1]}>
                            <Image source={{ uri: item }} style={newStyles.image} />
                        </View>
                    }}
                />

                {/* Custom Paginaton */}
                <View style={newStyles.pagination}>
                    {images.map((_, index) => {
                        return <View key={index} style={newStyles.dot} />
                    })}
                    <Animated.View style={[newStyles.dotIndicator, {
                        transform: [{
                            translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 16.4]
                            })
                        }]
                    }]} />
                </View>

                {/* Bottom Sheet */}
                <BottomSheet initialSnapIndex={0} snapPoints={[height - ITEM_HEIGHT, height]}>
                    <BottomSheetScrollView style={{backgroundColor: colors.background, padding: 20}}>
                        <Text style={{ color: colors.primary, fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase', marginBottom: 20, alignSelf: 'center' }}>zara mobile app</Text>
                        <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase' }}>{product.title}</Text>
                        <Text style={{ color: colors.primary, fontSize: 16, marginTop: 10, fontStyle: 'italic' }}>{product.price}</Text>
                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            {product.description.map((text, index) => {
                                return <Text key={index} style={{ color: colors.text, marginBottom: 10, lineHeight: 22 }}>{text}</Text>
                            })}
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            {product.description.map((text, index) => {
                                return <Text key={index} style={{ color: colors.text, marginBottom: 10, lineHeight: 22 }}>{text}</Text>
                            })}
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            {product.description.map((text, index) => {
                                return <Text key={index} style={{ color: colors.text, marginBottom: 10, lineHeight: 22 }}>{text}</Text>
                            })}
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            {product.description.map((text, index) => {
                                return <Text key={index} style={{ color: colors.text, marginBottom: 10, lineHeight: 22 }}>{text}</Text>
                            })}
                        </View>
                    </BottomSheetScrollView>
                </BottomSheet>
            </View>
        </>
    )
}

const newStyles = StyleSheet.create({
    image: {
        width: ITEM_WIDTH, height: ITEM_HEIGHT, resizeMode: 'cover'
    },
    pagination: { position: 'absolute', top: ITEM_HEIGHT / 2 - DOT_SIZE * images.length, left: 20 },
    dot: { width: DOT_SIZE, height: DOT_SIZE, borderRadius: DOT_SIZE, backgroundColor: '#333', marginBottom: DOT_SPACING },
    dotIndicator: {
        width: DOT_INDICATOR_SIZE, height: DOT_INDICATOR_SIZE, borderRadius: DOT_INDICATOR_SIZE, borderWidth: 1,
        borderColor: '#333', position: 'absolute', top: -DOT_SIZE / 2, left: -DOT_SIZE / 2
    }
})

export default React.memo(ShoppingBagsCarousel)