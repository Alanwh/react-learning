import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    static contextTypes = {
        themeColor : PropTypes.string
    }
    render() {
        return(
            <div style={{color:this.context.themeColor}}>
                this is title!
            </div>
        )
    }
}

export default Title;