import React,{ Component } from 'react';
import Content from './content';

class Main extends Component {
    render() {
        return(
            <div className='main'>
                this is main.
                <Content />
            </div>
        )
    }
}

export default Main;