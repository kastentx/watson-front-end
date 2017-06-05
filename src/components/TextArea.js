import React from 'react'

const borderStyle = {
  border: '2px solid white',
  backgroundColor: '#d0fffe',
  width: '80%',
  minHeight: '200px',
  margin: '5% auto'
}

const TextArea = (props) => {
  return (
    <div style={borderStyle}>
      {props.children}
    </div>
  )
}

export default TextArea;
