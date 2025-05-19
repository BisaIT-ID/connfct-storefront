"use client";
import clsx from "clsx";
import { Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  // const menu = await getMenu("next-js-frontend-header-menu");
  const pathname = usePathname();
  const menu = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Collections",
      url: "/collections",
    },
    {
      title: "Connect",
      url: "/connect",
    },
  ];

  return (
    <div className="w-full h-16 absolute top-0 left-[50%] -translate-x-[50%] z-50 flex justify-between items-center px-[60px] my-8 max-w-[1440px]">
      <Link href="/">
        <img src="/images/logo.png" className="h-8" />
      </Link>

      <div className="p-2 rounded-[100px] outline outline-offset-[-1px] outline-neutral-200 backdrop-blur-xl flex justify-start items-center gap-3">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={clsx(
              "px-5 py-3 rounded-[32px] text-base font-medium leading-snug",
              pathname === item.url ? "bg-white text-black" : "text-white"
            )}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/shop"
          className="pl-4 pr-2 py-2 bg-black rounded-[100px] shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 flex justify-center items-center gap-4"
        >
          <span className="justify-start text-white text-base font-medium leading-snug">
            Get Started
          </span>
          <div className="bg-white rounded-full p-2">
            <Send className="w-3 h-3 text-black" />
          </div>
        </Link>
      </div>
    </div>
  );
}

