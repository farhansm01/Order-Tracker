"use client";

import { FiHeadphones, FiX, FiMessageSquare, FiPhone, FiMail } from "react-icons/fi";

export default function ContactSupportModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0 z-40 cursor-pointer" onClick={onClose} />

      <div className="relative z-50 w-full max-w-[360px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-900">
              <FiHeadphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Contact Support</h3>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Support Agents Online
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

        {/* Static Support Methods List */}
        <div className="space-y-2.5">
          {/* Option A: Live Chat */}
          <button
            type="button"
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 border border-slate-200/80 dark:border-slate-800 transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FiMessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Start Live Chat
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Avg wait: ~2 minutes</p>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer">Chat &rarr;</span>
          </button>

          {/* Option B: Call Customer Care */}
          <button
            type="button"
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FiPhone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Call Customer Care
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">+1 (800) 555-0199</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer">Call &rarr;</span>
          </button>

          {/* Option C: Email Support */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
              <FiMail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Email Us</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">support@ordertrack.com</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
