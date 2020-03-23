import React from 'react';

const FormField = ({fields, index}) => (
  <div className="field-component">
    <label htmlFor="">{fields[index].label}</label>
    <input type="text" />
  </div>
);

export default FormField;
