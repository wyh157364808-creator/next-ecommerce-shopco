import React from "react";

export default function FaqPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Frequently Asked Questions</h1>

      {/* 锚点区域 */}
      <section id="orders" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6">Orders</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h3 className="font-medium">How do I place an order?</h3>
            <p className="mt-2">Simply add your favorite handmade pottery items to your cart and proceed to checkout. Fill in your shipping details and complete payment to confirm your order.</p>
          </div>
          <div>
            <h3 className="font-medium">Can I change or cancel my order after checkout?</h3>
            <p className="mt-2">You may contact us to modify or cancel your order within 24 hours of purchase. Once your package starts processing, cancellation is no longer available.</p>
          </div>
          <div>
            <h3 className="font-medium">Do you accept custom orders?</h3>
            <p className="mt-2">Yes, we offer custom handmade mugs. Please email us for custom design requests.</p>
          </div>
        </div>
      </section>

      <section id="payment" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6">Payment</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h3 className="font-medium">What payment methods do you accept?</h3>
            <p className="mt-2">We support credit cards, PayPal, Apple Pay and Google Pay. All payments are securely processed.</p>
          </div>
          <div>
            <h3 className="font-medium">Is my payment information safe?</h3>
            <p className="mt-2">Yes. We do not store your credit card information on our server. All payment data is handled by trusted secure payment providers.</p>
          </div>
          <div>
            <h3 className="font-medium">Why was my payment declined?</h3>
            <p className="mt-2">Common reasons include insufficient funds, card international transaction restrictions. You can try another payment method or contact your bank for help.</p>
          </div>
        </div>
      </section>

      <section id="tracking" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6">Tracking</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h3 className="font-medium">How can I track my package?</h3>
            <p className="mt-2">Once your order ships, we will send an email with your tracking number. Use this number to check delivery status on the carrier website.</p>
          </div>
          <div>
            <h3 className="font-medium">My tracking hasn’t updated for a long time, what to do?</h3>
            <p className="mt-2">International shipments sometimes have delays during customs clearance. If there is no update over 10 business days, please email us for assistance.</p>
          </div>
          <div>
            <h3 className="font-medium">What if my package is lost?</h3>
            <p className="mt-2">Contact us immediately with your order number. We will work with the shipping carrier to investigate.</p>
          </div>
        </div>
      </section>

      <section id="care" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6">Pottery Care</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h3 className="font-medium">Are your handmade mugs dishwasher safe?</h3>
            <p className="mt-2">Our pottery is dishwasher safe, but hand washing is recommended to protect the glaze and keep the art piece beautiful longer.</p>
          </div>
          <div>
            <h3 className="font-medium">Can I use these mugs in the microwave?</h3>
            <p className="mt-2">Most of our items are microwave safe. Avoid pieces with metallic decoration. Do not put empty pottery in the microwave.</p>
          </div>
          <div>
            <h3 className="font-medium">How to prevent cracking?</h3>
            <p className="mt-2">Avoid sudden extreme temperature changes. Do not pour boiling water directly into a cold mug.</p>
          </div>
        </div>
      </section>

      <div className="mt-16 pt-8 border-t">
        <p className="text-lg">Still have questions? Reach out to us via email.</p>
      </div>
    </div>
  );
}
