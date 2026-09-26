"use client";

import { useState } from "react";
import { orders } from "../../data/orders";
import {
  FiPackage,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiBox,
  FiAlertTriangle,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";

import OrderHeader from "@/components/OrderHeader";
import OrderOverview from "@/components/OrderOverview";
import DeliveryEstimate from "@/components/DeliveryEstimate";
import ShippingProgressBar from "@/components/ShippingProgressBar";
import ProductInfo from "@/components/ProductInfo";
import ActionButtons from "@/components/ActionButtons";
import ContactSupportModal from "@/components/modals/ContactSupportModal";
import ReportIssueModal from "@/components/modals/ReportIssueModal";
import ReportSuccessModal from "@/components/modals/ReportSuccessModal";
import OrderDetailsModal from "@/components/modals/OrderDetailsModal";

const orderOptions = [
  {
    id: "ORD-1001",
    label: "On Time",
    subtitle: "Standard delivery on track",
    icon: FiCheckCircle,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/60",
    badge: "Normal",
  },
  {
    id: "ORD-1002",
    label: "Delayed",
    subtitle: "Shipment delayed in transit",
    icon: FiAlertTriangle,
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/60",
    badge: "Delayed",
  },
  {
    id: "ORD-1003",
    label: "Not Received",
    subtitle: "Marked delivered but missing",
    icon: FiAlertCircle,
    iconColor: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-50 dark:bg-rose-950/60",
    badge: "Missing",
  },
  {
    id: "ORD-1004",
    label: "No Tracking",
    subtitle: "Tracking info not started",
    icon: FiInfo,
    iconColor: "text-slate-600 dark:text-slate-400",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    badge: "Pending",
  },
];

export default function Home() {
  const [selectedOrderId, setSelectedOrderId] = useState("ORD-1001");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [reportInput, setReportInput] = useState("");

  // Get currently selected order details
  const order = orders.find((o) => o.id === selectedOrderId) || orders[0];

  const steps = [
    { key: "processing", label: "Processing", icon: FiBox },
    { key: "shipped", label: "Shipped", icon: FiPackage },
    { key: "out for delivery", label: "Out for Delivery", icon: FiTruck },
    { key: "delivered", label: "Delivered", icon: FiCheckCircle },
  ];

  const currentStatus = order.status.toLowerCase();

  // Helper to get status badge styling & label
  const getBadgeInfo = () => {
    if (order.deliveredNotReceived) {
      return {
        text: "Not Received",
        bg: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40",
        dot: "bg-rose-500",
      };
    }
    if (order.delayed) {
      return {
        text: "Delayed",
        bg: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40",
        dot: "bg-amber-500",
      };
    }
    if (!order.trackingStarted) {
      return {
        text: "No Tracking Yet",
        bg: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700",
        dot: "bg-slate-400",
      };
    }
    return {
      text: "On Time",
      bg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40",
      dot: "bg-emerald-500",
    };
  };

  // Helper for estimate banner theme
  const getBannerTheme = () => {
    if (order.deliveredNotReceived) {
      return {
        gradient: "from-rose-600 to-rose-700",
        icon: FiAlertCircle,
        sub: "Action Required",
      };
    }
    if (order.delayed) {
      return {
        gradient: "from-amber-600 to-amber-700",
        icon: FiAlertTriangle,
        sub: "Delay Alert",
      };
    }
    if (!order.trackingStarted) {
      return {
        gradient: "from-slate-600 to-slate-700",
        icon: FiInfo,
        sub: "Order Processing",
      };
    }
    return {
      gradient: "from-indigo-600 to-indigo-700",
      icon: FiClock,
      sub: "Status & Estimate",
    };
  };

  const badge = getBadgeInfo();
  const banner = getBannerTheme();

  // Active step node style helper
  const getActiveStepClasses = () => {
    if (order.deliveredNotReceived) {
      return "bg-rose-600 text-white ring-4 ring-rose-100 dark:ring-rose-950/80 shadow-md scale-110";
    }
    if (order.delayed) {
      return "bg-amber-500 text-white ring-4 ring-amber-100 dark:ring-amber-950/80 shadow-md scale-110";
    }
    if (!order.trackingStarted) {
      return "bg-slate-600 text-white ring-4 ring-slate-200 dark:ring-slate-800 shadow-md scale-110";
    }
    return "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-950/80 shadow-md scale-110";
  };

  // Active text color helper
  const getActiveTextClass = () => {
    if (order.deliveredNotReceived) return "text-rose-600 dark:text-rose-400 font-bold";
    if (order.delayed) return "text-amber-600 dark:text-amber-400 font-bold";
    if (!order.trackingStarted) return "text-slate-700 dark:text-slate-300 font-bold";
    return "text-indigo-600 dark:text-indigo-400 font-bold";
  };

  // Placeholder recommendation based on situation
  const getReportPlaceholder = () => {
    if (order.deliveredNotReceived) {
      return "e.g., Courier marked item delivered at 2:30 PM, but package is missing from front porch & mailbox...";
    }
    if (order.delayed) {
      return "e.g., Package tracking has been stuck at logistics hub for 4 days without updates...";
    }
    if (!order.trackingStarted) {
      return "e.g., Order placed 5 days ago, tracking link has not been generated yet...";
    }
    return "e.g., Item arrived damaged or incorrect quantity delivered...";
  };

  // Tailored success message on report submission
  const getReportSuccessInfo = () => {
    if (order.deliveredNotReceived) {
      return {
        title: "Investigation Started",
        message: "Thanks for letting us know, we've flagged this as a missing package and started an official investigation with the carrier.",
        icon: FiAlertCircle,
        badgeColor: "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-950/60 dark:border-rose-900",
      };
    }
    if (order.delayed) {
      return {
        title: "Delay Query Escalated",
        message: `Thanks for reporting! We've escalated your shipment delay for Order ${order.id} directly with the carrier dispatch hub.`,
        icon: FiAlertTriangle,
        badgeColor: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/60 dark:border-amber-900",
      };
    }
    if (!order.trackingStarted) {
      return {
        title: "Warehouse Alert Sent",
        message: `Issue logged! We've notified our fulfillment team to prioritize dispatch for Order ${order.id}.`,
        icon: FiInfo,
        badgeColor: "text-slate-600 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700",
      };
    }
    return {
      title: "Report Received",
      message: `Thank you for your report regarding Order ${order.id}. Our customer care team is reviewing your submission.`,
      icon: FiCheckCircle,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/60 dark:border-emerald-900",
    };
  };

  // Submit Issue Handler
  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportInput.trim()) return;
    setActiveModal("report-success");
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-6 font-sans">
      
      {/* Mobile Screen Wrapper */}
      <div className="w-full max-w-[430px] bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[32px] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col min-h-[680px] transition-all relative">
        
        {/* Header Component */}
        <OrderHeader
          selectedOrderId={selectedOrderId}
          setSelectedOrderId={(id) => {
            setSelectedOrderId(id);
            setReportInput("");
          }}
          orderOptions={orderOptions}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 sm:gap-5">
          
          <OrderOverview order={order} badge={badge} />

          <DeliveryEstimate banner={banner} deliveryEstimate={order.deliveryEstimate} />

          <ShippingProgressBar
            steps={steps}
            orderStatus={order.status}
            currentStatus={currentStatus}
            getActiveStepClasses={getActiveStepClasses}
            getActiveTextClass={getActiveTextClass}
          />

          <ProductInfo
            product={order.product}
            onViewDetails={() => setActiveModal("details")}
          />

          <ActionButtons
            onContactSupport={() => setActiveModal("support")}
            onReportIssue={() => setActiveModal("report")}
          />

        </div>
      </div>

      {/* Modals */}
      {activeModal === "details" && (
        <OrderDetailsModal
          order={order}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === "support" && (
        <ContactSupportModal
          order={order}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === "report" && (
        <ReportIssueModal
          order={order}
          badgeText={badge.text}
          reportInput={reportInput}
          setReportInput={setReportInput}
          placeholder={getReportPlaceholder()}
          onSubmit={handleReportSubmit}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === "report-success" && (
        <ReportSuccessModal
          successInfo={getReportSuccessInfo()}
          reportInput={reportInput}
          onClose={() => {
            setActiveModal(null);
            setReportInput("");
          }}
        />
      )}

    </div>
  );
}
