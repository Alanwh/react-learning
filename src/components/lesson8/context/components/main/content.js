import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return(
            <div>
                this is content.
            </div>
        )
    }
}

export default Content;