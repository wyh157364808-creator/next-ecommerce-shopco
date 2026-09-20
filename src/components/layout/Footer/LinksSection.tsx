import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about us",
        url: "/about",
      },
      {
        id: 12,
        label: "our story",
        url: "/story",
      },
      {
        id: 13,
        label: "contact us",
        url: "/contact",
      },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "customer support",
        url: "/support",
      },
      {
        id: 22,
        label: "shipping info",
        url: "/shipping",
      },
      {
        id: 23,
        label: "returns & refunds",
        url: "/returns",
      },
      {
        id: 24,
        label: "terms & conditions",
        url: "/terms",
      },
      {
        id: 25,
        label: "privacy policy",
        url: "/privacy",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "orders",
        url: "/faq#orders",
      },
      {
        id: 32,
        label: "payment",
        url: "/faq#payment",
      },
      {
        id: 33,
        label: "tracking",
        url: "/faq#tracking",
      },
      {
        id: 34,
        label: "pottery care",
        url: "/faq#care",
      },
    ],
  },
  {
    id: 4,
    title: "resources",
    children: [
      {
        id: 41,
        label: "pottery blog",
        url: "/blog",
      },
      {
        id: 42,
        label: "ceramic care guide",
        url: "/care-guide",
      },
      {
        id: 43,
        label: "tutorial videos",
        url: "/tutorials",
      },
    ],
  },
];
const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};
export default LinksSection;
