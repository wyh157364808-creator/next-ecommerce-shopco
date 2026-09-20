import Link from "next/link";
import React from "react";

type LinkItem = {
  title: string;
  href: string;
};
type LinksCol = {
  title: string;
  links: LinkItem[];
};

const linksData: LinksCol[] = [
  {
    title: "COMPANY",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Our Story", href: "/story" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "HELP",
    links: [
      { title: "Customer Support", href: "/support" },
      { title: "Shipping Info", href: "/shipping" },
      { title: "Returns & Refunds", href: "/returns" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { title: "Orders", href: "/faq#orders" },
      { title: "Payment", href: "/faq#payment" },
      { title: "Tracking", href: "/faq#tracking" },
      { title: "Product Care", href: "/faq#care" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { title: "Pottery Blog", href: "/blog" },
      { title: "Care Guide", href: "/care-guide" },
      { title: "Tutorial Videos", href: "/tutorials" },
    ],
  },
];
const LinksSection = () => {
  return (
    <>
      {linksData.map((column) => (
        <div key={column.title} className="mb-6 lg:mb-0">
          <h3 className="font-bold text-base mb-4 uppercase tracking-wide">{column.title}</h3>
          <ul className="space-y-3 text-sm text-black/60">
            {column.links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="hover:text-black transition">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
export default LinksSection;
