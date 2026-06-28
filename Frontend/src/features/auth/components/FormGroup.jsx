import React from "react";

const FormGroup = ({ label, placeholder, type = "text", value, onChange }) => {
  const id = label.toLowerCase();
  const displayLabel = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="form-group">
      <label htmlFor={id}>{displayLabel}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        autoComplete={type === "password" ? "new-password" : "on"}
      />
    </div>
  );
};

export default FormGroup;
