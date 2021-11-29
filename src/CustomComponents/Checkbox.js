import React from 'react';

const Checkbox = ({ label, visited, valid, onChange, value,
    validationMessage }) => {
    const onValueChange = React.useCallback(
      () => {
        onChange({ value: !value });
      },
      [onChange, value]
    );
    const invalid = !valid && visited;
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            className={invalid ? "invalid" : ""}
            onChange={onValueChange}
            value={value} />
          { label }
        </label>
        { invalid && 
          (<div className="required">{validationMessage}</div>) }
      </div>
    );
  };

  export default Checkbox;