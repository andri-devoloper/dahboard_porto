import React from "react";

interface TextAreaGroupProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
}

function TextAreaGroup({
  label,
  name,
  value,
  onChange,
  rows = 4,
  disabled,
  required,
}: TextAreaGroupProps) {
  return (
    <div className="relative z-0 w-full">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`peer block w-full px-2.5 py-1.5 text-sm text-gray-600 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] ${
          disabled ? "border-gray-300" : "border-gray-400"
        }`}
        placeholder=" "
        disabled={disabled}
        required={required}
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

export default TextAreaGroup;
