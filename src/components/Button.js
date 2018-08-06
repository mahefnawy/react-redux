import React from 'react';

class Button extends React.PureComponent {
  clickHandler = () => {
		this.props.onClick(this.props.increment);
  };
  render() {
    console.dir('button render');
    return (
      <button onClick={this.clickHandler}>
       +{this.props.increment}
     </button>
    );
  }
}

export default Button;
