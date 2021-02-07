import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native'
// import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Switch, TouchableRipple } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import Home from './screens/Home'
import Detail from './screens/Detail'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TravelApp from './screens/travel/TravelApp'
import TravelDetail from './screens/travel/TravelDetail'
import FurnitureApp from './screens/furniture/FurnitureApp'
import FurnitureDetail from './screens/furniture/FurnitureDetail'
import NikeApp from './screens/nike/NikeApp'
import NikeDetail from './screens/nike/NikeDetail'
import Carousels from './screens/carousels/Carousels'
import CardsCarousel from './screens/carousels/CardsCarousel'
import ShoppingBagsCarousel from './screens/carousels/ShoppingBagsCarousel'
import MovieApp from './screens/movie/MovieApp'
import RecentMovies from './screens/movie/RecentMovies'
import MovieProfile from './screens/movie/MovieProfile'
import MovieDetail from './screens/movie/MovieDetail'
import DragAndDropFlatlist from './screens/utils/DragAndDropFlatlist'
import FlatListInfiniteScroll from './components/FlatListInfiniteScroll'

// Stacks
const HomeStack = createStackNavigator()
const CarouselsStack = createStackNavigator()

const TravelStack = createStackNavigator()
const FurnitureStack = createStackNavigator()
const NikeStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const MovieTab = createBottomTabNavigator()

// Themes
const CustomDefaultTheme = {
    dark: false,
    ...NavigationDefaultTheme,
    // ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        // ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#1D1D1D',
        primary: '#C52601',
        card: 'rgb(255, 255, 255)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)'
    }
}
const CustomDarkTheme = {
    dark: true,
    ...NavigationDarkTheme,
    // ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        // ...PaperDarkTheme.colors,
        background: '#1D1D1D',
        text: '#ffffff',
        primary: '#C52601'
    }
}

const Routes = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

    const toggleTheme = (navigation) => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme)
        navigation.closeDrawer()
    }

    const HomeStackNavigator = ({ navigation }) => (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="DragAndDropFlatlist" component={DragAndDropFlatlist} />
            <HomeStack.Screen name="FlatListInfiniteScroll" component={FlatListInfiniteScroll} />
            <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
    )

    const TravelStackNavigator = ({ navigation }) => (
        <TravelStack.Navigator screenOptions={{ headerShown: false }}>
            <TravelStack.Screen name="TravelApp" component={TravelApp} />
            <TravelStack.Screen name="TravelDetail" component={TravelDetail} />
        </TravelStack.Navigator>
    )

    const FurnitureStackNavigator = ({ navigation }) => (
        <FurnitureStack.Navigator screenOptions={{ headerShown: false }}>
            <FurnitureStack.Screen name="FurnitureApp" component={FurnitureApp} />
            <FurnitureStack.Screen name="FurnitureDetail" component={FurnitureDetail} />
        </FurnitureStack.Navigator>
    )

    const NikeStackNavigator = ({ navigation }) => (
        <NikeStack.Navigator screenOptions={{ headerShown: true }}>
            <NikeStack.Screen name="NikeApp" component={NikeApp} options={{
                title: "NIKE SHOE SELECTOR",
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'CarmenSans-SemiBold', alignSelf: 'center', fontSize: 18
                },
            }} />
            <NikeStack.Screen name="NikeDetail" component={NikeDetail} />
        </NikeStack.Navigator>
    )

    const CarouselsStackNavigator = ({ navigation }) => (
        <CarouselsStack.Navigator screenOptions={{ headerShown: false }}>
            <CarouselsStack.Screen name="CarouselsApp" component={Carousels}
                options={{
                    title: "Carousels",
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'CarmenSans-SemiBold', alignSelf: 'center', fontSize: 20, textTransform: 'uppercase'
                    },
                }}
            />
            <CarouselsStack.Screen name="CardsCarousel" component={CardsCarousel} />
            <CarouselsStack.Screen name="ShoppingBagsCarousel" component={ShoppingBagsCarousel} />
        </CarouselsStack.Navigator>
    )

    const MovieTabNavigator = ({ navigation }) => (
        <MovieTab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#000', padding: 4
                },
                activeTintColor: "#02ad94",
                inactiveTintColor: '#dedede',
            }}
            swipeEnabled
            initialRoute="Home"
            // barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
        >
            <MovieTab.Screen name="MovieApp" component={MovieApp}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <MovieTab.Screen name="RecentMovies" component={RecentMovies}
                options={{
                    tabBarLabel: 'Recents',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="camera-metering-spot" color={color} size={size} />
                    ),
                }}
            />
            <MovieTab.Screen name="MovieProfile" component={MovieProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            {/* <MovieTab.Screen name="MovieDetail" component={MovieDetail} /> */}
        </MovieTab.Navigator>
    )

    function CustomDrawerContent(props) {
        const { navigation } = props
        return (
            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <DrawerItemList {...props} />
                    {/* <Text style={{color: theme.colors.text}}>User</Text> */}
                </View>
                {/* <Button backgroundColor={theme.colors.background} style={{ backgroundColor: theme.colors.background }}
                    title="Toggle App Theme" onPress={() => toggleTheme()}
                // onPress={() => { navigation.navigate('Products') }}
                /> */}
                <TouchableOpacity onPress={() => toggleTheme(navigation)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                        <Text style={{ color: theme.colors.text }}>{isDarkTheme ? 'Light' : 'Dark'} Theme</Text>
                        <View pointerEvents="none">
                            {/* <Switch value={theme.dark} color={theme.colors.primary} /> */}
                            <Switch
                                trackColor={{ false: "#767577", true: "#721602" }}
                                thumbColor={isDarkTheme ? theme.colors.primary : "#f4f3f4"}
                                ios_backgroundColor={isDarkTheme ? theme.colors.primary : "#3e3e3e"}
                                // onValueChange={toggleSwitch}() => toggleTheme(navigation)
                                value={isDarkTheme}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        )
    }

    return (
        <>
            <NavigationContainer theme={theme}>
                <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={HomeStackNavigator} />
                    <Drawer.Screen name="Carousels" component={CarouselsStackNavigator} />
                    <Drawer.Screen name="NikeApp" options={{ title: 'Nike App' }} component={NikeStackNavigator} />
                    <Drawer.Screen name="FurnitureApp" options={{ title: 'Furniture App' }} component={FurnitureStackNavigator} />
                    <Drawer.Screen name="MovieApp" options={{ title: 'Movie App' }} component={MovieTabNavigator} />
                    <Drawer.Screen name="TravelApp" options={{ title: 'Travel App' }} component={TravelStackNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes