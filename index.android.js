import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import User from './components/User'

class RNFbTraining extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLogin: false,
      username: 'Sigit',
      city: 'Yogyakarta'
    }
  }

  componentWillMount () {
    console.log('Component Will Mount')
  }

  componentDidMount () {
    console.log('Component Did Mount')
  }

  componentWillReceiveProps (newProps) {
    console.log('Receive new Props')
  }

  shouldComponentUpdate () {
    console.log('Component should update')
    return true
  }

  componentWillUpdate () {
    console.log('Component will update')
  }

  componentDidUpdate () {
    console.log('Component did update')
  }

  renderButton = () => {
    const { isLogin, city } = this.state
    if (!isLogin) {
      return (
        <TouchableOpacity
            style={{ margin: 20, padding: 10, borderWidth: 1, borderColor: '#000000' }}
            onPress={() => this.setState({ isLogin: !isLogin })}
          >
          <Text>Login</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
              style={{ margin: 20, padding: 10, borderWidth: 1, borderColor: '#000000' }}
              onPress={() => this.setState({ city: 'Jakarta' })}
            >
            <Text>Move to Jakarta</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{ margin: 20, padding: 10, borderWidth: 1, borderColor: '#000000' }}
              onPress={() => this.setState({ city: 'Yogyakarta' })}
            >
            <Text>Move to Yogyakarta</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render () {
    console.log('Render')
    const { isLogin, username, city } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          (isLogin)
          ? <View>
            <User username={username} city={city} />
          </View>
          : <Text>Click login to change state</Text>
        }
        { this.renderButton() }
      </View>
    )
  }
}

export default RNFbTraining

AppRegistry.registerComponent('RNFbTraining', () => RNFbTraining)
