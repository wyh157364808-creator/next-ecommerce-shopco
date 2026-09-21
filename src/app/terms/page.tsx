import React from "react";
export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
      <p className="text-gray-500 mb-8">Last updated: September 2026</p>
      <div className="space-y-6 text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mt-4 mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the BEI Pottery website, you agree to be bound by these Terms & Conditions.
          If you do not agree with any part of these terms, please do not use our website.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Products</h2>
        <p>
          All products are handmade and may vary slightly in size, shape, color, and texture.
          These variations are part of the unique character of handmade pottery and are not considered defects.
          Product images are for illustrative purposes only.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Pricing & Payment</h2>
        <p>
          All prices are listed in USD and are subject to change without notice.
          We accept major credit cards, PayPal, Apple Pay, and Google Pay.
          Payment must be received in full before orders are processed and shipped.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Orders</h2>
        <p>
          By placing an order, you agree to pay the listed price plus any applicable shipping fees and taxes.
          We reserve the right to refuse or cancel any order for any reason, including but not limited to
          product availability, pricing errors, or suspected fraudulent activity.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Shipping & Delivery</h2>
        <p>
          Shipping times are estimates and not guaranteed. We are not responsible for delays caused by
          customs, weather, or carrier issues. International customers are responsible for any customs duties
          or import taxes imposed by their country.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Returns & Refunds</h2>
        <p>
          Please refer to our <a href="/returns" className="underline">Returns & Refunds Policy</a>
          for detailed information about returns, exchanges, and refunds.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and product designs,
          is the property of BEI Pottery and is protected by copyright laws.
          You may not reproduce, distribute, or use any content without our written permission.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
        <p>
          BEI Pottery shall not be liable for any indirect, incidental, or consequential damages
          arising from the use of our products or website. Our total liability shall not exceed
          the purchase price of the product in question.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms & Conditions at any time.
          Changes will be effective immediately upon posting to the website.
          Your continued use of the website constitutes acceptance of the updated terms.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact</h2>
        <p>
          If you have any questions about these Terms & Conditions, please contact us at hello@beipottery.com.
        </p>
      </div>
    </div>
  );
}
