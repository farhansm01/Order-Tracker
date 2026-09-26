"use client";

import { FiAlertCircle, FiX, FiSend } from "react-icons/fi";

export default function ReportIssueModal({
  order,
  badgeText,
  reportInput,
  setReportInput,
  placeholder,
  onSubmit,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="relative z-50 w-full max-w-[370px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-100 dark:border-rose-900">
              <FiAlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Report an Issue</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Order ID: <strong className="text-slate-700 dark:text-slate-200">{order.id}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Issue Input Form */}
        <form onSubmit={onSubmit} className="space-y-3.5">
          <div>
            <label htmlFor="issue-description" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Describe what went wrong:
            </label>
            <textarea
              id="issue-description"
              rows={3}
              required
              value={reportInput}
              onChange={(e) => setReportInput(e.target.value)}
              placeholder={placeholder}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
            <span>Selected scenario: <strong className="text-slate-700 dark:text-slate-200">{badgeText}</strong></span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!reportInput.trim()}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-md shadow-rose-600/20 transition-all cursor-pointer"
            >
              <FiSend className="w-3.5 h-3.5" />
              <span>Submit Report</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
