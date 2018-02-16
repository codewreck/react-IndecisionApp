import React from 'react';

const Option = (props) => {
  return (
    <div>
      <span>{props.optionText}</span>
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}
        >
          Remove item
      </button>
    </div>
  );
}

export default Option;
