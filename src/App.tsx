/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native'

const CARD_WIDTH = Dimensions.get('window').width * 0.8
const CARD_HEIGHT = Dimensions.get('window').height * 0.7
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

type CardType = {
  name: string
}

const cards = [
  { name: 'Card 1' },
  { name: 'Card 2' },
  { name: 'Card 3' },
  { name: 'Card 4' },
  { name: 'Card 5' },
  { name: 'Card 6' },
  { name: 'Card 7' },
  { name: 'Card 8' },
  { name: 'Card 9' },
  { name: 'Card 10' }
]

class App extends Component {
  _renderViews = (views: CardType[]): JSX.Element[] => {
    const { cardStyle } = styles

    return views.map(card => {
      return (
        <View style={cardStyle}>
          <Text>
            {card.name}
          </Text>
        </View>
      )
    })
  }

  render() {
    const { container } = styles

    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={container}>
          <ScrollView
            horizontal // Change the direction to horizontal
            pagingEnabled // Enable paging
            decelerationRate={0} // Disable deceleration
            snapToInterval={CARD_WIDTH+10} // Calculate the size for a card including marginLeft and marginRight
            snapToAlignment='center' // Snap to the center
            contentInset={{ // iOS ONLY
              top: 0,
              left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
              bottom: 0,
              right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
            }}
            contentContainerStyle={{ // contentInset alternative for Android
              paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0// Horizontal spacing before and after the ScrollView
            }}
          >
            {this._renderViews(cards)}
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 15
  }
})

export default App
