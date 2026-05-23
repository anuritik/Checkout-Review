import React from "react";

const SelectField = ({ label, options = [] }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#374151] mb-2">
        {label}
      </label>

      <select className="w-full h-[48px] border border-[#DCE3F0] rounded-lg px-4 text-sm outline-none focus:border-[#2563EB]">
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
