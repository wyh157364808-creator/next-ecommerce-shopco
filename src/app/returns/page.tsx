import React from "react";
export default function ReturnsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Returns & Refunds</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mt-4 mb-3">Return Policy</h2>
        <p>
          We want you to love every piece of BEI Pottery. If you're not completely satisfied,
          you may return your item within <strong>30 days</strong> of delivery for a full refund or exchange.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Return Conditions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Items must be unused, undamaged, and in original packaging</li>
          <li>Handmade items are inspected carefully before shipping</li>
          <li>Custom or personalized orders cannot be returned unless damaged</li>
          <li>Return shipping costs are the responsibility of the customer</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Damaged or Defective Items</h2>
        <p>
          If your item arrives damaged or defective, please contact us within <strong>7 days</strong>
          of delivery with photos of the item and packaging. We will arrange a replacement or full refund,
          including return shipping costs.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">How to Return</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Email us at hello@beipottery.com with your order number</li>
          <li>We will provide return instructions and a return address</li>
          <li>Ship the item back securely in original packaging</li>
          <li>Once received and inspected, your refund will be processed within 3–5 business days</li>
        </ol>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Refunds</h2>
        <p>
          Refunds are issued to the original payment method. Please allow 5–10 business days
          for the refund to appear on your statement, depending on your bank or card issuer.
        </p>
      </div>
    </div>
  );
}
