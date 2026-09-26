export default function ShippingProgressBar({
  steps,
  orderStatus,
  currentStatus,
  getActiveStepClasses,
  getActiveTextClass,
}) {
  return (
    <div className="space-y-2.5 sm:space-y-3">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Order Progress</h2>
        <span className={`text-xs font-bold capitalize ${getActiveTextClass()}`}>{orderStatus}</span>
      </div>

      {/* Horizontal Timeline Track */}
      <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div className="relative flex items-center justify-between">
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
  );
}
