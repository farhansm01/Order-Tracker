import { FiHeadphones, FiAlertCircle } from "react-icons/fi";

export default function ActionButtons({ onContactSupport, onReportIssue }) {
  return (
    <div className="pt-2 grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
      <button
        onClick={onContactSupport}
        className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-[11px] sm:text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer whitespace-nowrap"
      >
        <FiHeadphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        <span>Contact support</span>
      </button>
      <button
        onClick={onReportIssue}
        className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 dark:active:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-[11px] sm:text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer whitespace-nowrap"
      >
        <FiAlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0" />
        <span>Report an issue</span>
      </button>
    </div>
  );
}
