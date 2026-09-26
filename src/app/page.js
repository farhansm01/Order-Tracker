import { orders } from "../../data/orders";
import {
  FiPackage,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiHeadphones,
  FiAlertCircle,
  FiChevronLeft,
  FiShare2,
  FiBox,
} from "react-icons/fi";

export default function Home() {
  // Use order ORD-1001 data
  const order = orders.find((o) => o.id === "ORD-1001") || orders[0];

  // Horizontal progress steps
  const steps = [
    { key: "processing", label: "Processing", icon: FiBox },
    { key: "shipped", label: "Shipped", icon: FiPackage },
    { key: "out for delivery", label: "Out for Delivery", icon: FiTruck },
    { key: "delivered", label: "Delivered", icon: FiCheckCircle },
  ];

  const currentStatus = order.status.toLowerCase();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Mobile Screen Wrapper - centered with max-width ~400px */}
      <div className="w-full max-w-[400px] bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col min-h-[700px] transition-all">
        
        {/* Mobile Header Bar */}
        <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span>Track Order</span>
          </div>
          <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <FiShare2 className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between gap-6">
          
          {/* Top Section: Order ID with relevant Icon */}
          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                <FiPackage className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Order ID</span>
                <h1 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{order.id}</h1>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              On Time
            </span>
          </div>

          {/* Delivery Estimate Banner */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
            <div className="flex items-start gap-3 relative z-10">
              <div className="p-2 bg-white/15 rounded-lg backdrop-blur-xs mt-0.5">
                <FiClock className="w-4 h-4 text-indigo-100" />
              </div>
              <div>
                <p className="text-xs text-indigo-200 font-medium">Status & Estimate</p>
                <p className="text-sm font-semibold text-white mt-0.5 leading-snug">{order.deliveryEstimate}</p>
              </div>
            </div>
          </div>

          {/* Horizontal Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Order Progress</h2>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 capitalize">{order.status}</span>
            </div>

            {/* Horizontal Timeline Track */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="relative flex items-center justify-between">
                {/* Track Line */}
                <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />

                {steps.map((step) => {
                  const isCurrent = step.key === currentStatus;
                  const Icon = step.icon;

                  return (
                    <div key={step.key} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCurrent
                            ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-950/80 shadow-md scale-110"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Labels */}
              <div className="grid grid-cols-4 gap-1 mt-3 text-center">
                {steps.map((step) => {
                  const isCurrent = step.key === currentStatus;
                  return (
                    <span
                      key={step.key}
                      className={`text-[10px] leading-tight font-medium transition-colors ${
                        isCurrent
                          ? "text-indigo-600 dark:text-indigo-400 font-bold"
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
            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-slate-700/60 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0 shadow-xs border border-indigo-100 dark:border-slate-600">
                <FiPackage className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {order.product.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                  <span>Quantity: <strong className="text-slate-700 dark:text-slate-200">{order.product.quantity}</strong></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Item</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="pt-2 grid grid-cols-2 gap-3 mt-auto">
            <button className="flex items-center justify-center gap-2 py-3 px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer">
              <FiHeadphones className="w-4 h-4" />
              <span>Contact support</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 dark:active:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
              <FiAlertCircle className="w-4 h-4 text-rose-500" />
              <span>Report an issue</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
