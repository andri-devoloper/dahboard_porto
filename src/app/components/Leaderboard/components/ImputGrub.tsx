import React from "react";

interface InputGroupProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
}

function InputGroup({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled,
  required,
  readOnly,
}: InputGroupProps) {
  return (
    <div className="relative z-0 w-full">
      <label
        htmlFor={name}
        className={`flex items-center mb-2 text-gray-600 text-sm font-medium`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full max-w-xs px-2.5 py-1.5 mt-4 text-xs font-normal shadow-xs text-gray-900 bg-transparent border border-solid border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-normal ${
          disabled ? "border-gray-300" : "border-gray-400"
        }`}
        placeholder=" "
        disabled={disabled}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
}

export default InputGroup;
