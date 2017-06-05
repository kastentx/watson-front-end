import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div style={{marginTop : '20px'}}>
        <div className="form-group">
          <input
            style={{width: '80%', float: 'left', marginLeft: '1%'}}
            onChange={props.onChange}
            value={props.value}
            className="form-control"
            placeholder="Enter your message..."
            type="text" />
        </div>
        <div className="form-group" >
          <button
            style={{width: '18%', backgroundColor: '#1925c6'}}
            className="btn"
            type="submit">
            Submit
          </button>
        </div>
    </div>
    </form>
  );
}

Prompt.propTypes = {
  onSubmit: PropTypes.func,
  onUpdate: PropTypes.func,
  value: PropTypes.string
}
