import React,{ Component } from 'react';
import Title from './title';

class Header extends Component {
    render() {
        return(
            <div className='header'>
                this is header.
                <Title />
            </div>
        )
    }
}

export default Header;