"use client";

import { useState } from "react";
import { orders } from "../../data/orders";
import {
  FiPackage,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiHeadphones,
  FiAlertCircle,
  FiChevronLeft,
  FiBox,
  FiAlertTriangle,
  FiInfo,
  FiSliders,
} from "react-icons/fi";

const orderOptions = [
  {
    id: "ORD-1001",
    label: "On Time",
    subtitle: "Standard delivery on track",
    icon: FiCheckCircle,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/60",
    badge: "Normal",
  },
  {
    id: "ORD-1002",
    label: "Delayed",
    subtitle: "Shipment delayed in transit",
    icon: FiAlertTriangle,
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/60",
    badge: "Delayed",
  },
  {
    id: "ORD-1003",
    label: "Not Received",
    subtitle: "Marked delivered but missing",
    icon: FiAlertCircle,
    iconColor: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-50 dark:bg-rose-950/60",
    badge: "Missing",
  },
  {
    id: "ORD-1004",
    label: "No Tracking",
    subtitle: "Tracking info not started",
    icon: FiInfo,
    iconColor: "text-slate-600 dark:text-slate-400",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    badge: "Pending",
  },
];

export default function Home() {
  const [selectedOrderId, setSelectedOrderId] = useState("ORD-1001");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get currently selected order details
  const order = orders.find((o) => o.id === selectedOrderId) || orders[0];

  const steps = [
    { key: "processing", label: "Processing", icon: FiBox },
    { key: "shipped", label: "Shipped", icon: FiPackage },
    { key: "out for delivery", label: "Out for Delivery", icon: FiTruck },
    { key: "delivered", label: "Delivered", icon: FiCheckCircle },
  ];

  const currentStatus = order.status.toLowerCase();

  // Helper to get status badge styling & label
  const getBadgeInfo = () => {
    if (order.deliveredNotReceived) {
      return {
        text: "Not Received",
        bg: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40",
        dot: "bg-rose-500",
      };
    }
    if (order.delayed) {
      return {
        text: "Delayed",
        bg: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40",
        dot: "bg-amber-500",
      };
    }
    if (!order.trackingStarted) {
      return {
        text: "No Tracking Yet",
        bg: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700",
        dot: "bg-slate-400",
      };
    }
    return {
      text: "On Time",
      bg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40",
      dot: "bg-emerald-500",
    };
  };

  // Helper for estimate banner theme
  const getBannerTheme = () => {
    if (order.deliveredNotReceived) {
      return {
        gradient: "from-rose-600 to-rose-700",
        icon: FiAlertCircle,
        sub: "Action Required",
      };
    }
    if (order.delayed) {
      return {
        gradient: "from-amber-600 to-amber-700",
        icon: FiAlertTriangle,
        sub: "Delay Alert",
      };
    }
    if (!order.trackingStarted) {
      return {
        gradient: "from-slate-600 to-slate-700",
        icon: FiInfo,
        sub: "Order Processing",
      };
    }
    return {
      gradient: "from-indigo-600 to-indigo-700",
      icon: FiClock,
      sub: "Status & Estimate",
    };
  };

  const badge = getBadgeInfo();
  const banner = getBannerTheme();
  const BannerIcon = banner.icon;

  // Active step node style helper
  const getActiveStepClasses = () => {
    if (order.deliveredNotReceived) {
      return "bg-rose-600 text-white ring-4 ring-rose-100 dark:ring-rose-950/80 shadow-md scale-110";
    }
    if (order.delayed) {
      return "bg-amber-500 text-white ring-4 ring-amber-100 dark:ring-amber-950/80 shadow-md scale-110";
    }
    if (!order.trackingStarted) {
      return "bg-slate-600 text-white ring-4 ring-slate-200 dark:ring-slate-800 shadow-md scale-110";
    }
    return "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-950/80 shadow-md scale-110";
  };

  // Active text color helper
  const getActiveTextClass = () => {
    if (order.deliveredNotReceived) return "text-rose-600 dark:text-rose-400 font-bold";
    if (order.delayed) return "text-amber-600 dark:text-amber-400 font-bold";
    if (!order.trackingStarted) return "text-slate-700 dark:text-slate-300 font-bold";
    return "text-indigo-600 dark:text-indigo-400 font-bold";
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-6 font-sans">
      
      {/* Mobile Screen Wrapper */}
      <div className="w-full max-w-[430px] bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col min-h-[680px] transition-all relative">
        
        {/* Mobile Header Bar */}
        <div className="px-4 sm:px-5 pt-4 pb-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-30">
          <button className="p-1.5 sm:p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
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
                {/* Backdrop Click Listener */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />

                {/* Dropdown Container strictly inside mobile frame bounds */}
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

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 sm:gap-5">
          
          {/* Top Section: Order ID with relevant Icon */}
          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs shrink-0">
                <FiPackage className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Order ID</span>
                <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">{order.id}</h1>
              </div>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shrink-0 ${badge.bg}`}>
              <span className={`w-2 h-2 rounded-full ${badge.dot} ${order.delayed || order.deliveredNotReceived ? '' : 'animate-pulse'}`}></span>
              {badge.text}
            </span>
          </div>

          {/* Delivery Estimate Banner */}
          <div className={`bg-gradient-to-br ${banner.gradient} rounded-2xl p-3.5 sm:p-4 text-white shadow-md relative overflow-hidden transition-all duration-300`}>
            <div className="flex items-start gap-3 relative z-10">
              <div className="p-2 bg-white/15 rounded-lg backdrop-blur-xs mt-0.5 shrink-0">
                <BannerIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">{banner.sub}</p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">{order.deliveryEstimate}</p>
              </div>
            </div>
          </div>

          {/* Horizontal Progress Bar */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Order Progress</h2>
              <span className={`text-xs font-bold capitalize ${getActiveTextClass()}`}>{order.status}</span>
            </div>

            {/* Horizontal Timeline Track */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="relative flex items-center justify-between">
                {/* Track Line */}
                <div className="absolute top-1/2 left-3 right-3 sm:left-4 sm:right-4 h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />

                {steps.map((step) => {
                  const isCurrent = step.key === currentStatus;
                  const Icon = step.icon;

                  return (
                    <div key={step.key} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCurrent
                            ? getActiveStepClasses()
                            : "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Labels */}
              <div className="grid grid-cols-4 gap-0.5 sm:gap-1 mt-3 text-center">
                {steps.map((step) => {
                  const isCurrent = step.key === currentStatus;
                  return (
                    <span
                      key={step.key}
                      className={`text-[9px] sm:text-[10px] leading-tight font-medium transition-colors break-words px-0.5 ${
                        isCurrent
                          ? getActiveTextClass()
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {step.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1">Product Info</h2>
            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-50 dark:bg-slate-700/60 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0 shadow-xs border border-indigo-100 dark:border-slate-600">
                <FiPackage className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug break-words">
                  {order.product.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
                  <span>Quantity: <strong className="text-slate-700 dark:text-slate-200">{order.product.quantity}</strong></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Item</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="pt-2 grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-[11px] sm:text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer whitespace-nowrap">
              <FiHeadphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Contact support</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 dark:active:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-[11px] sm:text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer whitespace-nowrap">
              <FiAlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0" />
              <span>Report an issue</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
