"use client";

import { FiChevronLeft, FiSliders } from "react-icons/fi";

export default function OrderHeader({
  selectedOrderId,
  setSelectedOrderId,
  orderOptions,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  return (
    <div className="px-4 sm:px-5 pt-4 pb-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-30">
      <button className="p-1.5 sm:p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
        <FiChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        <span>Track Order</span>
      </div>

      {/* Situation Custom Dropdown Menu Button */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          title="Switch Order Situation"
          className={`p-2 rounded-full transition-all flex items-center justify-center cursor-pointer border shadow-xs ${
            isDropdownOpen
              ? "bg-indigo-600 text-white border-indigo-600 shadow-indigo-600/20"
              : "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 border-indigo-100 dark:border-indigo-900/50"
          }`}
        >
          <FiSliders className="w-4.5 h-4.5" />
        </button>

        {/* Custom Popover Menu */}
        {isDropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsDropdownOpen(false)}
            />

            <div className="absolute right-0 top-12 z-50 w-[270px] max-w-[calc(100vw-3rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2 space-y-1 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Select Situation
                </span>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full">
                  4 Mock Orders
                </span>
              </div>

              <div className="space-y-1">
                {orderOptions.map((opt) => {
                  const isSelected = opt.id === selectedOrderId;
                  const OptionIcon = opt.icon;

                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedOrderId(opt.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 text-slate-900 dark:text-white font-semibold shadow-2xs"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-transparent"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-2xs ${opt.iconBg}`}
                      >
                        <OptionIcon className={`w-4 h-4 ${opt.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold truncate">
                            {opt.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                            {opt.id}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                          {opt.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
