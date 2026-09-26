export const orders = [
  {
    id: "ORD-1001",
    status: "shipped",
    delayed: false,
    deliveredNotReceived: false,
    trackingStarted: true,
    deliveryEstimate: "Estimated delivery: Tomorrow by 5 PM",
    product: {
      name: "Wireless Noise-Canceling Headphones",
      quantity: 1,
    },
  },
  {
    id: "ORD-1002",
    status: "shipped",
    delayed: true,
    deliveredNotReceived: false,
    trackingStarted: true,
    deliveryEstimate: "Delayed in transit due to severe weather. New estimate: Oct 2",
    product: {
      name: "Ergonomic Mechanical Keyboard",
      quantity: 1,
    },
  },
  {
    id: "ORD-1003",
    status: "delivered",
    delayed: false,
    deliveredNotReceived: true,
    trackingStarted: true,
    deliveryEstimate: "Delivered on Sep 24. (Reported not received)",
    product: {
      name: "Ultra-Wide 4K Monitor",
      quantity: 2,
    },
  },
  {
    id: "ORD-1004",
    status: "processing",
    delayed: false,
    deliveredNotReceived: false,
    trackingStarted: false,
    deliveryEstimate: "Tracking details will be updated once the order is shipped.",
    product: {
      name: "USB-C Multi-Port Adapter",
      quantity: 3,
    },
  },
];

export default orders;
