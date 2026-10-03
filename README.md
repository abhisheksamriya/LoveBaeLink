# 💌 LoveBae - Digital Gifting App

LoveBae is an interactive, multi-step digital gifting platform where users can create personalized digital "Love Cards" for their partners.

## 🌐 Live Links
* **Main App URL:** [https://lovebaelink.jshub.shop/](https://lovebaelink.jshub.shop/)
* **Demo Love Card:** [https://lovebaelink.jshub.shop/gift/32jpa3](https://lovebaelink.jshub.shop/gift/32jpa3)

## 🛠️ Tech Stack
* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Animations:** Framer Motion
* **Database:** Firebase Firestore
* **Payments:** Razorpay (Direct UPI Payment Links)

## ✨ Features
* **Interactive Builder:** A smooth 4-step UI for creating personalized cards.
* **Mini-Games:** Custom engagement features like a Love Meter and Balloon Pop.
* **Direct-to-App Payment UI:** Utilizes Razorpay UPI Intent links to open GPay, PhonePe, or Paytm directly without login friction.
* **Instant Link Generation:** Generates a unique, dynamic URL immediately after the payment verification step.
* **Responsive Design:** Mobile-first approach, fully styled with Tailwind CSS.

## 🚀 Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhisheksamriya/LoveBaeLink
   cd LoveBaeLink
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 💸 Payment Integration (Smart Friction Architecture)

To enable an instant launch without waiting for business API key approvals, this app uses a smart "Friction UI" architecture:

* **Zero-Login Payments:** Uses Razorpay "UPI Payment Links" (Intent links) so users bypass manual detail entry and jump straight into their UPI apps.
* **State-Based Verification:** The UI uses a `hasClickedPay` state to track if the user has clicked the "Pay Securely" button.
* **Controlled Access:** The final "Get Link" button remains disabled until the payment intent is triggered. Once clicked, a document is created in Firebase (with `paid: true`) and the shareable link is generated.
* **Manual Audit:** The admin performs a daily audit matching total Firebase records with actual successful payments on the Razorpay dashboard. Any discrepancies (unpaid fake entries) are manually deleted from Firebase, instantly deactivating the associated digital card.