import {Dimensions, StyleSheet} from 'react-native'
// import { FONTS } from './theming/index'

const {width, height} = Dimensions.get('window')
const SPACING = 10; const ITEM_SIZE = width / 2;

const white = '#fff';const red = '#CC0000'

// CarmenSans-SemiBold, CarmenSans-Regular CarmenSans-Thin
const styles = StyleSheet.create({
    safeAreaView: {backgroundColor: '#fff'},
    container: {flex: 1,backgroundColor: white},
    flex1: {flex: 1},
    center: {justifyContent: 'center', alignItems: 'center'},
    horizontalCenter: {alignItems: 'center'},
    // Helper styles
    heading: {fontSize: 25, fontWeight: "bold"},
    fwBold: {fontWeight: "bold"},
    button: {paddingHorizontal: 20, paddingVertical: 10, backgroundColor: red, borderRadius: 10, marginBottom: 10},
    // Gutters
    mt10:{marginTop: 10},
    mb10:{marginBottom: 10},
    p20:{padding: 20}, ph20:{paddingHorizontal: 20},
    // Colors
    bgWhite:{backgroundColor: white},
    // Fonts
    fs25: {fontSize: 25}, fs18: {fontSize: 18}, fs16: {fontSize: 16},
    // Headings
    h1:{fontSize: 26, fontFamily: 'CarmenSans-SemiBold', marginBottom: 16},
    h3:{fontSize: 20, fontFamily: 'CarmenSans-SemiBold'},
    h5:{fontSize: 16, fontFamily: 'CarmenSans-SemiBold'},
    // styles
    pageTitle: {fontSize: 25,fontWeight: "bold"},
    // infinite scroll styles
    infiniteItem: {padding: 20, borderBottomWidth: 1,borderStyle: 'solid', borderColor: '#aaa',fontSize: 16,fontWeight: "bold"},
    // Nike App styles
    trendingShadow: {shadowColor: "#000",shadowOffset: {width: 0,height: 5},shadowOpacity: 0.29,shadowRadius: 4.65,elevation: 7,},
    recentContainerShadow: {shadowColor: "#000",shadowOffset: {width: 0,height: 7},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,},
    absolute: {position: "absolute",top: 0,left: 0,bottom: 0,right: 0},
    // CAROUSEL STYLES
    carouselImage: {width: 200, height: 320, borderRadius: 10, alignSelf: 'center',backgroundColor: 'rgba(0,0,0,0.9)'},
    carouselText: {paddingLeft: 14,color: 'white', position: 'absolute', bottom: 10, left: 2, fontWeight: 'bold'},
    carouselIcon: {position: 'absolute', top: 15, right: 15},
    carouselContentContainer: {flex: 1,backgroundColor: '#000',height: 720,paddingHorizontal: 14},
    SearchboxContainer: {flexDirection: 'row',marginVertical: 20, width: '95%',alignSelf: 'center', backgroundColor: '#fff', elevation: 10,borderRadius: 4,},
    Searchbox: {padding: 12,paddingLeft: 20,fontSize: 16,},
    SearchboxIcon: {position: 'absolute', right: 20, top: 14},
    ImageBg: {flex: 1,height: null,width: null,opacity: 1,justifyContent: 'flex-start'},
    carouselContainerView: {width: '100%',height:350 ,justifyContent: 'center',alignItems: 'center'},
    carousel: {flex:1,overflow: 'visible'},
    movieInfoContainer: {flexDirection: 'row', marginTop: 16, justifyContent: 'space-between', width: Dimensions.get('window').width - 14},
    movieName: {paddingLeft: 14,color: 'white', fontWeight: 'bold', fontSize: 20,marginBottom: 6},
    movieStat: {paddingLeft: 14,color: 'white', fontWeight: 'bold', fontSize: 14, opacity: 0.8},
    playIconContainer: {backgroundColor: '#212121',padding: 18,borderRadius: 40,justifyContent: 'center',alignItems: 'center',elevation: 25,borderWidth: 4,borderColor: 'rgba(2, 173, 148, 0.2)',marginBottom: 1},

    // Travel App styles
    overlay:{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,borderBottomRightRadius: 65,backgroundColor: '#000',opacity: 0.4},
    menuBar:{ justifyContent: 'space-between',flexDirection:'row',paddingHorizontal: 16,paddingTop: 15},
    searchContainer:{paddingTop: 50,paddingLeft: 16},
    userName:{fontSize: 38,fontWeight: 'bold',color: '#fff'}, 
    userText:{fontSize: 16,fontWeight: 'bold',color: '#fff'},
    serachBox:{backgroundColor: '#fff',width: '90%',borderTopRightRadius: 40,borderBottomRightRadius: 40,marginTop: 16,paddingLeft: 16,paddingRight: 40},
    searchIcon:{position: 'absolute',top: 30,right: 60,opacity: 0.7},
    imageOverlay: {width: 150, height: 250,position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: '#000',opacity: 0.3,borderRadius: 16},
    detailImageOverlay: {width: 150, height: 150,position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: '#000',opacity: 0.3,borderRadius: 16},
    travelImageBackground:{height: height * 45 / 100, justifyContent: 'flex-end'},
    tagLine: {color: '#fff', fontWeight: 'bold', fontSize: 14, paddingHorizontal: 14, marginVertical: 6},
    placeName:{color: '#fff', fontWeight: 'bold', fontSize: 24, paddingHorizontal: 14, marginBottom: 50},
    bookTicketBtn:{paddingVertical: 14, paddingHorizontal: 24,borderRadius: 40,position: 'absolute', zIndex: 99,right: 16,top: height * 45 / 100 - 25, backgroundColor: '#ff6200', elevation: 5},
    bookTicketText: {color: '#fff', fontWeight: 'bold'},

    // health app styles
    box1 : {flex : 1,alignItems : 'center',justifyContent : 'center'}


})

export default styles