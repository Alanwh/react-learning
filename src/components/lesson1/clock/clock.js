import React,{Component} from 'react';

class Clock extends Component{
  state = {
    date: new Date()
  }
  componentDidMount() {
    this.TimeID = setInterval(()=>{
      this.setState({
        date: new Date()
      })
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.TimeID);
  }
  render() {
    return(
      <div>
        It is time {this.state.date.toLocaleString()}
      </div>
    )
  }
}

export default Clock;