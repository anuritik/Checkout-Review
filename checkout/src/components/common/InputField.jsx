import React from "react";

const InputField = ({ label, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#374151] mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[48px] border border-[#DCE3F0] rounded-lg px-4 text-sm outline-none focus:border-[#2563EB]"
      />
    </div>
  );
};

export default InputField;
