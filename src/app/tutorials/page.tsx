import React from "react";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Handmade Rose Cup — Shaping a Ceramic Rose, Petal by Petal 🌹",
      desc: "Watch the full process of sculpting a beautiful handmade rose ceramic cup step by step.",
      videoId: "XD6e5fpR2EM",
    },
    {
      title: "A Cup Inspired by Wallum – Quiet Hands, Wild Flowers, Clay 🌸",
      desc: "This video shows how wild flowers inspired this unique hand-thrown pottery cup design.",
      videoId: "zHvzVxBlI8U",
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
          </div>
        ))}
      </div>
    </div>
  );
}
