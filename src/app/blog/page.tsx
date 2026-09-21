import React from "react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Story Behind Handmade Ceramic Mugs",
      desc: "Every handmade pottery piece carries unique marks from the artist’s hands. Learn how we shape, glaze and fire our mugs in the studio.",
      link: "#"
    },
    {
      title: "How to Style Handmade Pottery In Your Home",
      desc: "Simple tips to display ceramic cups and vases, adding warm handmade texture to your kitchen, dining table or shelf.",
      link: "#"
    },
    {
      title: "Why Handmade Beats Mass-produced Tableware",
      desc: "Mass factory items are identical, but hand-thrown pottery has subtle imperfections that make each piece one-of-a-kind.",
      link: "#"
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.desc}</p>
            <a href={post.link} className="underline text-black hover:text-gray-600">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
