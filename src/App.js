import React from 'react'
import { StatusBar, Platform, SafeAreaView } from 'react-native'
import Routes from './Routes'
import styles from './Styles'

const App = () => {
    return (
        <>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor="#CC0000" />
            <SafeAreaView style={[styles.safeAreaView, styles.flex1]}>
                <Routes />
            </SafeAreaView>
        </>
    )
}

export default App