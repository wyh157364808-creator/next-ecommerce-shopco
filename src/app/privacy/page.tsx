import React from "react";
export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: September 2026</p>
      <div className="space-y-6 text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mt-4 mb-3">1. Introduction</h2>
        <p>
          BEI Pottery ("we", "us", "our") respects your privacy and is committed to protecting
          your personal data. This Privacy Policy explains how we collect, use, and protect
          your information when you visit our website or make a purchase.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal information:</strong> name, email address, shipping address, phone number</li>
          <li><strong>Payment information:</strong> credit card details (processed securely by our payment providers, not stored on our servers)</li>
          <li><strong>Order information:</strong> purchase history, order details, shipping preferences</li>
          <li><strong>Technical information:</strong> IP address, browser type, device information, browsing behavior</li>
          <li><strong>Communication data:</strong> emails, customer support inquiries, feedback</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and fulfill your orders</li>
          <li>To send order confirmations, shipping updates, and customer support responses</li>
          <li>To improve our website, products, and customer experience</li>
          <li>To send promotional emails and newsletters (only if you opt in)</li>
          <li>To prevent fraud and ensure secure transactions</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience, analyze website traffic,
          and remember your preferences. You can control or disable cookies through your browser settings.
          Disabling cookies may affect the functionality of our website.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Sharing</h2>
        <p>
          We do not sell your personal information to third parties. We may share your data with
          trusted service providers who assist us in operating our business, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Payment processors (Stripe, PayPal)</li>
          <li>Shipping carriers</li>
          <li>Email marketing services</li>
          <li>Website hosting and analytics providers</li>
        </ul>
        <p>
          These providers are only permitted to use your data to perform services on our behalf
          and are required to maintain the confidentiality of your information.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal data against
          unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>To exercise any of these rights, please contact us at hello@beipottery.com.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13.
          We do not knowingly collect personal information from children under 13.
          If you believe we have collected information from a child, please contact us immediately.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date. We encourage you to review this policy periodically.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your data,
          please contact us at hello@beipottery.com.
        </p>
      </div>
    </div>
  );
}
