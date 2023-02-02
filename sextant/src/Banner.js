import React, { Component } from 'react'

class Banner extends Component {
  render() {
    return (
      <div className="Title">
        <h1>{this.props.banner}</h1>
      </div>
    )
  }
}

export default Banner
