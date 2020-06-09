import React, { Component } from 'react';

const BE = 'http://localhost:3000/photos'

export default class Display extends Component {
    
    state = {
        latitude: '',
        longitude: '',
        sunrise: '',
        sunset: ''
    };

    getLocation = () => {
        console.log('hits function')
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
     
      } else {
        return <p>"Geolocation is not supported by this browser."</p>
      }
    }


    showPosition = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })

    }

    componentDidMount() {
        this.getLocation()
        fetch(BE)
            .then(response => response.json())
            .then()
    }
    
    componentDidUpdate() {
        if (this.state.latitude) {
        fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}`)
            .then((response) => response.json())
            // .then(console.log)
            .then((res) =>
                this.setState({
                    sunrise: res.results.sunrise,
                    sunset: res.results.sunset
                }))
        }
    }

    render() {
        return (
            <div className="saved">
                <h2>In Fort Collins today</h2>
                <h3>Sunrise is at {this.state.sunrise}</h3>
                <h3>Sunset is at {this.state.sunset}</h3>
            </div>
        );
    }
}
