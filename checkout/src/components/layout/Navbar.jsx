import React from "react";
import { Search, Gem, Plus, Menu, CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-[#E6EAF2]">
      <div className="max-w-[1440px] mx-auto h-[72px] px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-[420px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Find influencers to collaborate with"
              className="w-full h-[42px] rounded-md border border-[#2563EB] bg-white pl-4 pr-11 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-blue-100"
            />

            <Search
              size={18}
              strokeWidth={2}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Upgrade Button */}
          <button
            className="hidden sm:flex items-center gap-1.5 h-[36px] px-3 rounded-md bg-[#F5B544] text-white text-[13px] font-medium hover:bg-[#E8A52E] transition-all
            "
          >
            <Gem size={15} />
            Upgrade
          </button>

          {/* Create Campaign */}
          <button className="flex items-center gap-1.5 h-[36px] px-3 sm:px-4 rounded-md bg-[#2563EB] text-white text-[13px] font-medium hover:bg-[#1E5FE0] transition-all whitespace-nowrap">
            <Plus size={16} />
            <span className="hidden sm:block">Create Campaign</span>
          </button>
          {/* Profile + Menu */}
          <div className="h-[52px] px-[14px] rounded-full bg-[#FAFAFA] border border-[#F1F1F1] flex items-center gap-[14px] shadow-sm">
            {/* Profile */}
            <div className="w-[38px] h-[38px] rounded-full bg-[#EEF2FF] flex items-center justify-center">
              <CircleUserRound
                size={24}
                strokeWidth={1.8}
                className="text-[#4c60b0]"
              />
            </div>

            {/* Menu */}
            <button className="flex items-center justify-center">
              <Menu size={25} strokeWidth={2.2} className="text-[#111827]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
