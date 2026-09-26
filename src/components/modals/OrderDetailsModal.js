"use client";

import { FiX, FiFileText, FiMapPin, FiCreditCard, FiPackage } from "react-icons/fi";

export default function OrderDetailsModal({ order, onClose }) {
  // Mock pricing calculation based on quantity
  const unitPrice = 129.99;
  const subtotal = (unitPrice * order.product.quantity).toFixed(2);
  const shipping = "Free";
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="relative z-50 w-full max-w-[380px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-900 shrink-0">
              <FiFileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Order Details</h3>
              <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{order.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Item Summary */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Items Ordered</h4>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <FiPackage className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{order.product.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Qty: {order.product.quantity} × ${unitPrice}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white shrink-0">${subtotal}</span>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Delivery Address</h4>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <FiMapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Alex Morgan</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">742 Evergreen Terrace, Suite 100<br />Springfield, OR 97477</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Payment Method</h4>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <FiCreditCard className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">Visa ending in •••• 4242</span>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
          <div className="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Shipping</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{shipping}</span>
          </div>
          <div className="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Estimated Tax</span>
            <span>${tax}</span>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-1.5 flex justify-between font-bold text-slate-900 dark:text-white text-sm">
            <span>Total Paid</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          Close Details
        </button>

      </div>
    </div>
  );
}
