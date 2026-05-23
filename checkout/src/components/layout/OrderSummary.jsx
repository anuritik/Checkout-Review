import React from "react";
import { CircleArrowUp } from "lucide-react";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h2 className="text-[24px] font-bold text-[#111827] mb-5">
        Order Summary
      </h2>

      <div className="border border-blue-200 rounded-lg p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-end gap-1">
              <h3 className="text-[34px] font-bold text-[#111827]">₹4,999</h3>

              <span className="text-[#6B7280] text-sm mb-3">/month</span>
            </div>

            <p className="text-sm text-[#6B7280] mt-1">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-semibold tracking-wider text-[#2563EB]">
              SELECTED PLAN
            </p>

            <p className="text-[20px] font-bold text-[#111827]">Startup</p>
          </div>
        </div>
      </div>

      <button className="w-full h-[46px] mt-5 rounded-full border border-[#2563EB] text-[#2563EB] font-medium text-sm flex items-center justify-center">
        <CircleArrowUp size={18} className="mx-1" /> Upgrade to Growth Plan
      </button>
    </div>
  );
};

export default OrderSummary;
