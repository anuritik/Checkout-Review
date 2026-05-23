// WalletCouponSection.jsx

import CouponCard from "./CouponCard";
import { WalletMinimal, ChevronUp, Ticket, Tag } from "lucide-react";

const WalletCouponSection = () => {
  return (
    <div className="w-full max-w-[460px] bg-[#FAFAFB] rounded-2xl border border-[#E5E7EB] p-4">
      {/* Wallet Card */}
      <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-5">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <WalletMinimal size={20} className="text-[#2B6EF3]" />
            </div>

            <div>
              <h3 className="text-[16px] font-[700] text-[#111827] leading-none">
                Wallet Balance
              </h3>

              <p className="text-[14px] text-[#6B7280] mt-1">
                ₹500.00 available
              </p>
            </div>
          </div>

          {/* Right */}
          <button className="h-[40px] px-5 rounded-lg border border-[#D6E4FF] text-[#2B6EF3] text-[15px] font-[600] hover:bg-blue-50 transition-all">
            Apply
          </button>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="bg-white border border-[#E5E7EB] rounded-[10px] mt-4 overflow-hidden">
        {/* Header */}
        <div className="h-[58px] px-5 flex items-center justify-between border-b border-[#ECECEC]">
          <div className="flex items-center gap-3">
            <Tag size={20} className="text-[#6B7280]" />

            <h3 className="text-[16px] font-[700] text-[#111827]">
              Apply Coupon
            </h3>
          </div>

          <ChevronUp size={20} className="text-[#6B7280]" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Input */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 h-[44px] border border-[#DCE3F0] rounded-[8px] px-4 text-[15px] text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#2B6EF3]"
            />

            <button className="h-[44px] px-5 rounded-[8px] border border-[#D6E4FF] text-[#2B6EF3] text-[15px] font-[600] bg-white">
              Apply
            </button>
          </div>

          {/* Coupons */}
          <div className="space-y-3 mt-5">
            <CouponCard
              title="WELCOME20"
              desc="20% off on your first month"
              active
            />

            <CouponCard title="ANNUAL50" desc="50% off on annual plans" />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="px-1 mt-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-[16px] text-[#6B7280]">Subtotal</p>

            <p className="text-[16px] font-[700] text-[#111827]">₹14,999.00</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[16px] text-[#6B7280]">Tax (18% GST)</p>

            <p className="text-[16px] font-[700] text-[#111827]">₹1,079.64</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] my-6" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-[700] text-[#111827]">
            Total due today
          </h2>

          <h2 className="text-[24px] md:text-[28px] font-[700] text-[#2B6EF3]">
            16,078.64
          </h2>
        </div>

        {/* Button */}
        <button className="w-full h-[52px] mt-7 rounded-[8px] bg-[#2B6EF3] text-white text-[16px] font-[600] hover:bg-[#1E5FE0] transition-all">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default WalletCouponSection;
