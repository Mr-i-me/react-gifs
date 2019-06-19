import React, { Component } from 'react';

class Gif extends React.Component {

  handleClick = () =>{ this.props.setId(this.props.id) }
  
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
      );
  }
}
export default Gif;
