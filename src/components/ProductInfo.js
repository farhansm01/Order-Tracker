import { FiPackage, FiFileText, FiChevronRight } from "react-icons/fi";

export default function ProductInfo({ product, onViewDetails }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Product Info</h2>
        <button
          onClick={onViewDetails}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <FiFileText className="w-3.5 h-3.5" />
          <span>Order Details</span>
          <FiChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3.5 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-50 dark:bg-slate-700/60 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0 shadow-xs border border-indigo-100 dark:border-slate-600">
          <FiPackage className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug break-words">
            {product.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
            <span>Quantity: <strong className="text-slate-700 dark:text-slate-200">{product.quantity}</strong></span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Item</span>
          </p>
        </div>
      </div>
    </div>
  );
}
