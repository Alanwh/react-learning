import React,{ Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class Fetch extends Component {
    state = {
        'movie': 'not found'
    }
    componentWillMount() {
        fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(rep => rep.json())
            .then(data => {
                this.setState(
                    {
                        'movie': data
                    }
                )
                console.log(this.state.movie);
            });
    }
    componentDidMount() {
        console.log(this.state.movie);
    }
    render() {
        return(
            <div>
               哈哈哈
            </div>
        )
    }
}