import React, { Component } from 'react';
import SunCards from './SunCards.js'

const BE = 'http://localhost:3000/photos'

export default class Display extends Component {
    
    state = {
        latitude: '',
        longitude: '',
        sunrise: '',
        sunrise_image: '',
        sunset: '',
        sunset_image: ''
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
        console.log(position)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })

    }
    
    componentDidMount() {
        this.getLocation()
        fetch(BE)
            .then(response => response.json())
            // .then(result => console.log(result[5]["url"]))
            .then(result => this.setState({
                sunrise_image: result[4]["url"],
                sunset_image: result[5]["url"]
            }))
    }
    
    componentDidUpdate() {
        if (this.state.latitude) {
            fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}`)
            .then((response) => response.json())
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
                <SunCards sunrise={this.state.sunrise} sunrise_image={this.state.sunrise_image} sunset={this.state.sunset} sunset_image={this.state.sunset_image}/>
            </div>
        );
    }
}
