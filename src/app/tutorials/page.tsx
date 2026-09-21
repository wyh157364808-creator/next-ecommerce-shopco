import React from "react";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "How to Prepare Your Mug for Hot Drinks",
      desc: "Simple steps to warm your handmade cup and avoid cracking when pouring hot coffee or tea.",
    },
    {
      title: "Cleaning Stains from Ceramic Glaze",
      desc: "Natural, safe ways to remove coffee and tea stains without damaging your pottery.",
    },
    {
      title: "Handmade Pottery 101: How Clay Becomes A Mug",
      desc: "Learn the full process: wheel throwing, trimming, glazing and kiln firing.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Tutorials</h1>
      <div className="space-y-8">
        {tutorials.map((item, idx) => (
          <div key={idx} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
