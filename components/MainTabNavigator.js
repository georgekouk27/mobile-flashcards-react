import React from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import * as Icon from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import AddCard from '../components/AddCard'
import AddDeck from '../components/AddDeck'
import DeckView from '../components/DeckView'
import DeckList from '../components/DeckList'
import QuizList from '../components/QuizList'
import { blue, white } from '../utils/colors'

const isIOS = Platform.OS === 'ios' ? true : false;

const routeConfigs = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name={isIOS ? 'ios-browsers' : 'md-albums' }
          size={28}
          color={tintColor}
        />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name={isIOS ? 'ios-add' : 'md-add-circle'}
          size={28}
          color={tintColor}
        />
      )
    }
  }
}

routeConfigs.Decks.navigationOptions.tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
}

routeConfigs.AddDeck.navigationOptions.tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
}

const tabNavigatorConfig = {
  navigationOptions: {
    headerShown: false
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    inactiveTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
    showIcon: true
  }
}

const Tabs = isIOS
  ? createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
  : createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        headerShown: false
      }
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        },
        title: 'Deck View'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add Card'
      }
    },
    QuizList: {
      screen: QuizList,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        },
        title: 'QuizList'
      }
    }
  },
  { 
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    } 
  }
)

export default createAppContainer(MainNavigator)