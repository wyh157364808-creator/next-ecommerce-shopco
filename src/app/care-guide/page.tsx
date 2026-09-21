import React from "react";

export default function CareGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Pottery Care Guide</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <p>Follow these simple care tips to keep your BEI Pottery pieces beautiful for many years.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Washing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hand washing is strongly recommended to protect the glaze surface.</li>
          <li>If using dishwasher, use gentle cycle and avoid harsh abrasive detergent.</li>
          <li>Do not scrub hard with rough sponges, it may scratch the glaze.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Microwave & Oven</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most of our pottery is microwave safe, except pieces with metallic paint.</li>
          <li>Never heat an empty mug in microwave.</li>
          <li>Not suitable for oven use.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Temperature Warning</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Avoid sudden extreme temperature changes.</li>
          <li>Do not pour boiling hot water directly into a cold mug, thermal shock may cause cracking.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Storage</h2>
        <p>Stack carefully. We recommend placing a soft cloth between stacked ceramic pieces to prevent scratches.</p>

        <p className="mt-10">If you have any questions about caring for your pottery, feel free to send us an email.</p>
      </div>
    </div>
  );
}
