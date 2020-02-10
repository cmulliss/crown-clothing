import React from 'react'

import './form-input.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
// why label prop? Because we are going to selectively render a label, because we don't know if we need it. Going to selectively render a string interpolated value. This label will always have the classname form-input-label, but we will also add this shrink property.
