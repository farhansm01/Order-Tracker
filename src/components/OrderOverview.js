import { FiPackage } from "react-icons/fi";

export default function OrderOverview({ order, badge }) {
  return (
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
  );
}
