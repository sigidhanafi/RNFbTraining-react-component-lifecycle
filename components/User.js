import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class User extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: props.username,
      city: props.city
    }
  }

  componentWillReceiveProps (newProps) {
    console.log('Component Will Receive Props')
    const { city, username } = newProps
    this.setState({
      city,
      username
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.city === nextState.city) {
      return false
    }
    return true
  }

  render () {
    console.log('Render new city')
    const { username, city } = this.state
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>{ username }</Text>
        <Text style={{ textAlign: 'center' }}>{ city }</Text>
      </View>
    )
  }
}
