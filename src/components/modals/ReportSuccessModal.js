"use client";

import { FiX } from "react-icons/fi";

export default function ReportSuccessModal({
  successInfo,
  reportInput,
  onClose,
}) {
  const SuccessIcon = successInfo.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="relative z-50 w-full max-w-[360px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${successInfo.badgeColor}`}>
            <SuccessIcon className="w-6 h-6" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {successInfo.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {successInfo.message}
          </p>
        </div>

        {/* Submitted User Text Display */}
        {reportInput ? (
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Your Submitted Note:</span>
            <p className="text-xs text-slate-700 dark:text-slate-300 italic">"{reportInput}"</p>
          </div>
        ) : null}

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}
