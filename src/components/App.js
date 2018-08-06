import React from 'react';
import Button from './Button';

class App extends React.Component {
  state = {
    time: (new Date()).toLocaleString(),
    totalCounter: 0
  };
  onButtonClick = (increment) => {
		this.setState((prevState) => ({
    	totalCounter: prevState.totalCounter + increment
    }));
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: (new Date()).toLocaleString(),
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    return (
    	<React.Fragment>
        <div id="time">{this.state.time}</div>
        <Button increment={1} onClick={this.onButtonClick} />
        <Button increment={5} onClick={this.onButtonClick} />
        <Button increment={10} onClick={this.onButtonClick} />
        <input type="text"/>
        <div>
          Total Counter is: {this.state.totalCounter}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
