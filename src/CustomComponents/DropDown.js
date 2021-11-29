import React from 'react';

const DropDown = ({ label, value, valid, visited, options,
    onChange, onBlur, onFocus, validationMessage, }) => {
    const invalid = !valid && visited;
    return (
      <div onBlur={onBlur} onFocus={onFocus}>
        <label>
          { label }
          <select
            className={invalid ? "invalid" : ""}
            value={value}
            onChange={onChange}>
            <option key=""></option>
            {options.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        { invalid && 
          (<div className="required">{validationMessage}</div>) }
      </div>
    )
  }

  export default DropDown;