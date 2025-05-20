"use client";
import { ArrowUpRight, Send, Zap } from "lucide-react";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-12 max-w-[1440px] mx-auto text-white">
      <div className="flex flex-col gap-6 w-full">
        <div className="text-center text-white text-base font-medium leading-snug px-3 py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-3 w-fit">
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
          Connfct Product
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
        </div>
        <div className="flex justify-between items-start gap-8">
          <span className="text-5xl font-bold max-w-[620px]">
            Discover the Full Range of Connfct Products
          </span>
          <button className="bg-black text-white px-8 py-4 rounded-full border border-white whitespace-nowrap">
            See All Products
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          url="/"
        />
        <div className="flex items-center justify-center p-8 text-[32px]">
          New Product
        </div>
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          url="/"
        />
        <div className="flex items-center p-8 text-[32px]">Best Product</div>
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          isBestSeller
          url="/"
        />
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          isBestSeller
          url="/"
        />
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          url="/"
        />
        <Card
          image="/home/ring.png"
          name="Connfct Product"
          price={54}
          url="/"
        />
        <div className="flex flex-col justify-center items-center p-8 text-[32px]">
          <div className="flex flex-col justify-center items-start gap-6 p-8 text-[32px]">
            <span className="max-w-[220px] leading-snug">
              Discover Our Collections
            </span>
            <div className="py-2 px-3 bg-white rounded-[100px] shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 inline-flex justify-center items-center gap-4">
              <span className="justify-start text-neutral-900 text-base font-medium leading-snug">
                More Collections
              </span>
              <div className="bg-black rounded-full p-2">
                <Send className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  image: string;
  name: string;
  isBestSeller?: boolean;
  price: number;
  url: string;
}

const Card = ({ image, name, isBestSeller, price, url }: CardProps) => {
  return (
    <Link
      href={url}
      className="relative flex flex-col justify-between p-8 rounded-4xl bg-[#292929] group hover:bg-white transition-all duration-300"
    >
      {isBestSeller && (
        <img
          src="/home/products/best.svg"
          alt=""
          className="absolute top-3 left-3 opacity-100 group-hover:opacity-0"
        />
      )}
      <img src={image} alt="" className="w-full object-contain aspect-square" />
      <div className="flex flex-col gap-5">
        <button className="flex group-hover:opacity-100 opacity-0 transition-all duration-300 items-center text-black justify-between w-fit border border-black gap-3 pl-4 pr-2 py-2 h-auto bg-gray-50 rounded-[100px] hover:bg-gray-50">
          <span className="font-medium">See Detail</span>

          <span className="flex items-center justify-center bg-black p-1 rounded-full shadow-[inset_0px_-2px_3px_#ffffff6e]">
            <ArrowUpRight className="w-3 h-3 text-white" />
          </span>
        </button>
        <div className="flex items-center justify-between group-hover:text-black">
          <span className="text-2xl font-bold">{name}</span>
          <span className="flex items-center gap-2">
            Start from{" "}
            <span className="py-1 px-3 bg-black text-white rounded-full font-bold text-xl">
              ${price}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Products;
