import React,{ Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import PropTypes from 'prop-types';

// import { connect } from './react-redux';
import { connect } from 'react-redux';

class Content extends Component {
    // static contextTypes = {
    //     store: PropTypes.object
    // }

    // constructor() {
    //     super();
    //     this.state = {
    //         themeColor: ''
    //     }
    // }

    // componentWillMount() {
    //     const { store } = this.context;
    //     this._updateThemeColor();
    //     store.subscribe(()=>{
    //         this._updateThemeColor();
    //     })
    // }

    // _updateThemeColor() {
    //     const { store } = this.context;
    //     const state = store.getState();
    //     this.setState({
    //         themeColor: state.themeColor
    //     })
    // }
    /* connect */ 
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return(
            <div className='content' style={{color: this.props.themeColor}}>
                this is content.
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Content = connect(mapStateToProps)(Content);
export default Content;