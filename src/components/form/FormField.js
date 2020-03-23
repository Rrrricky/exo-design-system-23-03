import React from 'react';

const FormField = ({fields, index}) => (
  <div>
    <label htmlFor="">{fields[index].label}</label>
    <input style={{ border: `1px solid black`, padding: `2px` }} type="text" />
  </div>
);

export default FormField;
