import React from 'react'
import "./Exhibits.css"
const Exhibits = ({heading, children}) => {
  return (
    <div className="data-blocks">
      <h1>{heading}</h1>
      <h2>{children}</h2>
    </div>
  )
}

export default Exhibits