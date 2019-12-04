import React, { Component } from 'react'
import AstronomyCard from './AstronomyCard'
import Header from './Header'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const API_KEY = process.env.REACT_APP_API_KEY
export default class AstronomyContainer extends Component {
    state = {
        astronomy: [],
        isLoading: true
    }

    componentDidMount() {

        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
        axios.get(END_POINT + API_KEY)
            .then(res => {
                this.setState({
                    astronomy: res.data,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err, 'failed to fetch data')
            })
    }


    render() {
        const { astronomy } = this.state;
        return (
            <div >
                <Header />
                {this.state.isLoading
                    ?
                    <div className='loader'>
                        <Loader
                            type="MutatingDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={5000}
                        />
                    </div>
                    :
                    <AstronomyCard data={astronomy} />
                }
            </div>
        )
    }
}
