import React from "react";

function FormField({label, type,name, value, onChange}) {
  if(type === 'textarea'){
    return (
      <>
        <label>
          {label}
          <textarea 
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
      </>
    )
  }else{
    return (
      <>
        <label>
          {label}
          <input 
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
      </>
    )
  }
  
  
}

export default FormField;