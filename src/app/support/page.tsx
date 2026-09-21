import React from "react";
export default function SupportPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Customer Support</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          We're here to help! If you have any questions about our handmade pottery,
          your order, shipping, or anything else, please don't hesitate to reach out.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How to contact us</h2>
        <p>Email: mendedtea@gmail.com </p>
        <p>We usually reply within 24–48 hours on business days.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Before you email</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Check our <a href="/faq" className="underline">FAQ page</a> for common questions</li>
          <li>Check your order confirmation email for tracking info</li>
          <li>Read our <a href="/shipping" className="underline">Shipping Info</a> and <a href="/returns" className="underline">Returns Policy</a></li>
        </ul>
      </div>
    </div>
  );
}
