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
      videoId: "XD6e5fpR2EM", // 你的Youtube视频ID
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Tutorials</h1>
      <div className="space-y-12">
        {tutorials.map((item, idx) => (
          <div key={idx} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{item.desc}</p>
            {item.videoId && (
              <iframe
                width="100%"
                height="420"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
