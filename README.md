# Order Tracker

I built this as a redesign of an order tracking screen for an e-commerce app. The original only showed a plain status label (Processing/Shipped/etc), which users found confusing. This version shows a clear visual timeline, the current status, delivery estimate, product info, and support options, and it also handles a few tricky real-world situations like a delayed order, an order marked delivered that the customer says they never got, and an order that doesn't have tracking info yet.

## Live demo
https://order-tracker-ivory.vercel.app/

## Built with
- Next.js
- Tailwind CSS
- lucide-react for icons

## What it does
- Shows order progress as a horizontal timeline (Processing → Shipped → Out for Delivery → Delivered)
- Shows the current status and delivery estimate clearly
- Shows basic product info (name, quantity)
- Has Contact support and Report an issue buttons
- Handles 3 edge cases in the same screen:
  - Order is delayed
  - Order says delivered but customer didn't receive it
  - Tracking isn't available yet
- Works well on mobile screen sizes (360px to 430px wide)

## How to run it locally

Clone it:
```bash
git clone https://github.com/farhansm01/Order-Tracker.git
cd Order-Tracker
```

Install the packages:
```bash
npm install
```

Start it:
```bash
npm run dev
```

Then just open [http://localhost:3000](http://localhost:3000) in your browser.

## A few notes
- Since there's no backend or any real functionality to update order status live, I created 4 mock orders in `data/mockOrders.js`, each representing one of the required scenarios (on-time, delayed, delivered but not received, and no tracking yet)
- The "Preview as" dropdown at the top just switches between these 4 mock orders, so you can see how the same screen adapts to each situation, it's not a real feature, just a way to demonstrate all 4 states without needing a backend
- All other data (product info, delivery estimates, etc.) is also mocked
- My AI prompt history for this project is in `AI_PROMPT_HISTORY.txt`