import React from 'react';

class Button extends React.PureComponent {
  clickHandler = () => {
    this.props.onClick(this.props.increment);
  };
  render() {
    return (
      <button className="button" onClick={this.clickHandler}>
        +{this.props.increment}
      </button>
    );
  }
}

export default Button;
