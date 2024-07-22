import React from "react";

interface InputGroup1Props {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
}

function InputGroup1({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled,
  required,
  readOnly,
}: InputGroup1Props) {
  return (
    <div className="relative z-0 w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] ${
          disabled ? "border-gray-300" : "border-gray-400"
        }`}
        placeholder=" "
        disabled={disabled}
        required={required}
        readOnly={readOnly}
      />
      <label
        htmlFor={name}
        className={`peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`}
      >
        {label}
      </label>
    </div>
  );
}

export default InputGroup1;
