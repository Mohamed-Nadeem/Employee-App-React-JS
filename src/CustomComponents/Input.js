import React from 'react';

const input = (fieldProps) => {
    const {
      fieldType, label, value, visited, valid,
      onChange, onBlur, onFocus, validationMessage, 
    } = fieldProps;
    const invalid = !valid && visited;
    return (
      <div onBlur={onBlur} onFocus={onFocus}>
        <label>
          { label }
          <input
            type={fieldType}
            className={invalid ? "invalid" : ""}
            value={value}
            onChange={onChange} />
        </label>
        { invalid && 
          (<div className="required">{validationMessage}</div>) }
      </div>
    );
  };

  export default input;