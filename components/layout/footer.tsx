import { Send } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

export default async function Footer() {
  const links = [
    {
      label: "LINKS",
      links: [
        { label: "Home", href: "/#home" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Why Connfct", href: "/#why-connfct" },
        { label: "Collections", href: "/#collections" },
      ],
    },
    {
      label: "PRODUCT",
      links: [
        { label: "Connfct Card", href: "/products/connfct-card" },
        { label: "Connfct Ring", href: "/products/connfct-ring" },
        { label: "Connfct Desk Star", href: "/products/connfct-desk-star" },
        { label: "Connfct Keychain", href: "/products/connfct-keychain" },
        { label: "Connfct-nano", href: "/products/connfct-nano" },
      ],
    },
  ];

  return (
    <footer className="bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-20 max-w-[1440px] mx-auto text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="max-w-[309px]">
            Höfe am Brühl, Leipzig Tower Brühl 1, 04109 Leipzig Germany
          </p>
          <div className="flex items-center gap-3 p-1 pr-3 border border-white rounded-full w-fit">
            <img
              src="/home/footer/mail.png"
              className="size-8 rounded-full"
              alt=""
            />
            https://hello@connfct.com
          </div>
        </div>

        <div className="flex gap-5">
          {links.map((link) => (
            <div className="flex flex-col font-medium gap-4 w-[200px]">
              <span className="text-lg text-text-tertiary">#{link.label}</span>
              {link.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="max-w-[309px] text-2xl font-bold">
            Just tap to get instantly connected and stay always secure
          </span>
          <div className="py-2 px-3 bg-white rounded-[100px] w-fit shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 inline-flex justify-center items-center gap-4">
            <span className="justify-start text-neutral-900 text-base font-medium leading-snug">
              Get Started
            </span>
            <div className="bg-black rounded-full p-2">
              <Send className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3">
          <span className="text-lg">FOLLOW US</span>
          <div className="flex items-center gap-3 mb-1">
            <a href="#">
              <img src="/home/footer/ig.png" alt="" />
            </a>
            <a href="#">
              <img src="/home/footer/fb.png" alt="" />
            </a>
            <a href="#">
              <img src="/home/footer/li.png" alt="" />
            </a>
          </div>
          <span className="text-xs">© 2025 Connfct. All rights reserved</span>
        </div>
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <img src="/images/logo.png" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
