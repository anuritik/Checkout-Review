// CouponCard.jsx

import React from "react";

const CouponCard = ({ title, desc, active }) => {
  return (
    <div
      className={`h-[64px] px-5 rounded-[10px] border flex items-center justify-between transition-all ${active ? "border-[#2B6EF3] bg-white" : "border-[#E5E7EB] bg-white"}`}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <h3 className="text-[15px] font-[700] text-[#111827]">{title}</h3>

        <p className="text-[10px] text-[#6B7280]">{desc}</p>
      </div>

      {/* Radio */}
      <div
        className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${active ? "border-[#2B6EF3]" : "border-[#2B6EF3]"}`}
      >
        {active && (
          <div className="w-[10px] h-[10px] rounded-full bg-[#2B6EF3]" />
        )}
      </div>
    </div>
  );
};

export default CouponCard;
