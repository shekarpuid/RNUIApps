import React from 'react'
import { View, Text, Image, ImageBackground, TextInput } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { useTheme } from '@react-navigation/native'
// import RobotoRegular from ''
import styles from '../../Styles'

const Backup = (props) => {
    const { navigation } = props
    const { colors, dark } = useTheme()
    return (
        <ScrollView>
            {/* <View style={[styles.flex1, styles.center]}>
                <Text style={{color: colors.text}}>Travel App</Text>
            </View> */}
            {/* <ScrollView></ScrollView> */}

            <ImageBackground
                source={require("../../images/back.png")}
                style={{ width: "100%", height: "100%" }}
            >
                {/* Header */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                        paddingHorizontal: 20,justifyContent: 'space-between'
                    }}
                >
                    <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} onPress={() => navigation.openDrawer()} />
                    <Icon
                        name="account-circle"
                        size={33}
                        color="#a2a2db"
                    />
                </View>

                <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
                    
                    {/* Into text */}
                    <Text
                        style={{
                            fontSize: 40,
                            color: "#522289",
                            fontFamily: "RobotoBold",
                        }}
                    >
                        Hello
                    </Text>

                    <Text
                        style={{
                            fontSize: 15,
                            paddingVertical: 10,
                            paddingRight: 80,
                            lineHeight: 22,
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Text>

                    {/* Search text */}
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: colors.background,
                            borderRadius: 40,
                            alignItems: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            marginTop: 30,
                        }}
                    >
                        <Image resizeMode="contain"
                            source={require("../../images/search.png")}
                            style={{ height: 20, width: 20, top: 3 }}
                        />
                        <TextInput
                            placeholder="Lorem ipsum" placeholderTextColor={dark ? colors.text : "#ccccef"}
                            style={{ paddingHorizontal: 10, fontSize: 15, color: dark ? colors.text : "#ccccef" }}
                        />
                    </View>

                    {/* Icons slider */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginRight: -40, marginTop: 30 }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TravelDetail")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#5facdb",
                            }}
                        >
                            <Image resizeMode="contain"
                                source={require("../../images/p.png")}
                                style={{ height: 24, width: 24 }}
                            />
                        </TouchableOpacity>

                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#ff5c83",
                                marginHorizontal: 22,
                            }}
                        >
                            <Icon name="office-building" color="white" size={32} />
                        </View>

                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#ffa06c",
                            }}
                        >
                            <Icon name="bus" color="white" size={32} />
                        </View>

                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#bb32fe",
                                marginLeft: 22,
                            }}
                        >
                            <Icon name="dots-horizontal" color="white" size={32} />
                        </View>
                    </ScrollView>

                    <Text
                        style={{
                            color: colors.text,
                            fontFamily: "RobotoRegular",
                            marginTop: 50,
                            fontSize: 17,
                        }}
                    >
                        Recommended
                    </Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginHorizontal: 0, marginTop: 30 }}
                    >
                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 200,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                            }}
                        >
                            <Image resizeMode="contain"
                                source={require("../../images/1.jpg")}
                                style={{ width: 180, borderRadius: 10, height: 130 }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Lorem impsum dolor sit amet, consectetuer adipscing elit,
                                    </Text>
                                </View>
                                <Icon name="map-marker" size={25} color="#ff5c83" />
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 200,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                                marginHorizontal: 20,
                            }}
                        >
                            <Image resizeMode="contain"
                                source={require("../../images/2.jpg")}
                                style={{ width: 180, borderRadius: 10, height: 130 }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Lorem impsum dolor sit amet, consectetuer adipscing elit,
                                    </Text>
                                </View>
                                <Icon name="map-marker" size={25} color="#5facdb" />
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 200,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                            }}
                        >
                            <Image resizeMode="contain"
                                source={require("../../images/3.jpg")}
                                style={{ width: 180, borderRadius: 10, height: 130 }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Lorem impsum dolor sit amet, consectetuer adipscing elit,
                                    </Text>
                                </View>
                                <Icon name="map-marker" size={25} color="#bb32fe" />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default React.memo(Backup)