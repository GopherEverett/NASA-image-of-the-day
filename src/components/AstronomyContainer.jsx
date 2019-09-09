import React, { Component } from 'react'
import AstronomyCard from './AstronomyCard'
import Header from './Header'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
export default class AstronomyContainer extends Component {
    state = {
        astronomy: []
    }

    componentDidMount() {
        
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
        console.log(API_KEY)
        axios.get(END_POINT + API_KEY)
            .then(res => {
                this.setState({
                    astronomy: res.data
                })
            })
            .catch(err => {
                console.log(err, 'failed to fetch data')
            })
    }


    render() {
        const { astronomy } = this.state;
        return (
            <div>
                <Header />
                <AstronomyCard data={astronomy} />
            </div>
        )
    }
}
