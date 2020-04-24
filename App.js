import React from 'react'
import PropTypes from 'prop-types'
import Constants from 'expo-constants'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import MainTabNavigator from './components/MainTabNavigator'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { blue } from './utils/colors'
import { setLocalNotification } from './utils/helpers'


const store = createStore(reducer, applyMiddleware(thunk, logger));

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

UdaciStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <UdaciStatusBar backgroundColor='blue' barStyle='light-content' />
        <SafeAreaView style={styles.container}>
          <MainTabNavigator />
        </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({ 
  container: {
    color: blue,
    flex: 1,
  }
})