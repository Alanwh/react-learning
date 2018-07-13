import React,{ Component } from 'react';
import PropTypes from 'prop-types';

// import { connect } from './react-redux';
import { connect } from 'react-redux';

class Header extends Component {
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
    //     console.log(store);
    //     this._updateThemeColor();
    //     store.subscribe(()=>{
    //         this._updateThemeColor();
    //     })
    // }

    // _updateThemeColor() {
    //     const { store } = this.context;
    //     const state = store.getState();
    //     this.setState(
    //         {
    //             themeColor: state.themeColor
    //         }
    //     )
    // }

    /*  connect */
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return(
            <div className='header' style={{color:this.props.themeColor}}>
                this is header.
            </div>
        )
    }
}


/* 使用 connect */ 
const mapStateToProps = (state) => {
    return  {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header);

export default Header;