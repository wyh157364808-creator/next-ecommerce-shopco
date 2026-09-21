import React from "react";
export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Shipping Info</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mt-4 mb-3">Processing Time</h2>
        <p>
          All orders are carefully packed and processed within 1–3 business days.
          Handmade items may require extra handling time during peak seasons.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Shipping Rates & Delivery</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 pr-4">Region</th>
                <th className="py-3 pr-4">Estimated Delivery</th>
                <th className="py-3">Shipping Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4">United States</td>
                <td className="py-3 pr-4">5–10 business days</td>
                <td className="py-3">Free over $50</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">Canada</td>
                <td className="py-3 pr-4">7–14 business days</td>
                <td className="py-3">$9.99</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4">Europe</td>
                <td className="py-3 pr-4">10–20 business days</td>
                <td className="py-3">$14.99</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Rest of World</td>
                <td className="py-3 pr-4">15–30 business days</td>
                <td className="py-3">$19.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Tracking</h2>
        <p>
          Once your order ships, you will receive a tracking number by email.
          You can also check your order status anytime from your account.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Customs & Duties</h2>
        <p>
          International orders may be subject to customs fees or import taxes
          imposed by the destination country. These charges are the responsibility of the customer.
        </p>
      </div>
    </div>
  );
}
