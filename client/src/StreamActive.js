import React, { Component } from 'react';
import axios from 'axios';

// twitchAppID
const clientID = 'n3y5s8iqnjtbenjpsf17f5ii2pp8ba'

class StreamActive extends Component {

  constructor() {
    super()

    this.state = {
      online: null
    }
  }
  componentDidMount() {
    this.getStream()

    setInterval(this.getStream, 10000);
  }

  getStream = () => {
    axios.get('https://api.twitch.tv/kraken/streams/amfletcher?client_id=n3y5s8iqnjtbenjpsf17f5ii2pp8ba')
    .then((response) => {
      console.log(response.data.stream)
      this.setState({
        online: response.data.stream
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return this.state.online ? 'online' : 'offline'
  }
}

export default StreamActive
