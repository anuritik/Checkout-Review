import React from "react";

const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1E4FD8]",

    secondary: "border border-[#D1D5DB] text-[#374151] bg-white",
  };

  return (
    <button
      className={`h-[46px] px-6 rounded-lg text-sm font-medium transition-all ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
