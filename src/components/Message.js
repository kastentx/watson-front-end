import React from 'react';

const humanStyle = {
  backgroundColor: '#1925c6',
  margin: '.5% 1% .5% auto',
  width: '40%',
  color: 'white'
}

const watsonStyle = {
  backgroundColor: '#ec991d',
  margin: '.5% 1% .5% auto',
  width: '40%',
  color: 'white'
}

const Message = (props) => {
  return (
    <div style={props.user === 'human' ? humanStyle : watsonStyle}>
      {props.text}
    </div>
  )
}

export default Message;
