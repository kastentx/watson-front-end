import React from 'react'

const borderStyle = {
  border: '2px solid white',
  borderRadius: '5px',
  backgroundColor: '#d0fffe',
  width: '80%',
  minHeight: '600px',
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
