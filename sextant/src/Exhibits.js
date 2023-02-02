import React, {Component} from 'react'
import "./Exhibits.css"
class Exhibits extends Component {
  render(){
    return(
      <div className="data-blocks">
        <h1>{this.props.heading}</h1>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Exhibits