export default function DeliveryEstimate({ banner, deliveryEstimate }) {
  const BannerIcon = banner.icon;

  return (
    <div className={`bg-gradient-to-br ${banner.gradient} rounded-2xl p-3.5 sm:p-4 text-white shadow-md relative overflow-hidden transition-all duration-300`}>
      <div className="flex items-start gap-3 relative z-10">
        <div className="p-2 bg-white/15 rounded-lg backdrop-blur-xs mt-0.5 shrink-0">
          <BannerIcon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs text-white/80 font-medium">{banner.sub}</p>
          <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">{deliveryEstimate}</p>
        </div>
      </div>
    </div>
  );
}
