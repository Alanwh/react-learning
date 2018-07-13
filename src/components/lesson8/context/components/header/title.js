import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }

    componentDidMount() {
        setTimeout(()=>{
            // 子组件能随意改变父组件 context 
            this.context.themeColor = 'yellow';
        },1000);
    }

    render() {
        return(
            <div style={{color:this.context.themeColor}}>
                this is title.
            </div>
        )
    }
}

export default Title;