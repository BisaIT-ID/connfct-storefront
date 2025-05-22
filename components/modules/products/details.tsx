"use client";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import PRODUCT from "app/data/dummy/product";
import {
  getPersonalizationData,
  hasPersonalizationData,
} from "app/utils/personalization";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductColors from "./variants/color";
import ProductMaterial from "./variants/material";

const ProductDetailCard = ({ productId }: { productId: string }) => {
  const [hasPersonalization, setHasPersonalization] = useState(false);
  const [logoName, setLogoName] = useState<string>("");
  const [logoImage, setLogoImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const hasData = await hasPersonalizationData(productId);
      setHasPersonalization(hasData);

      if (hasData) {
        const data = await getPersonalizationData(productId);
        if (data) {
          setLogoName(data.logoName);
          setLogoImage(data.previewUrl || null);
        }
      }
    })();
  }, [productId]);

  return (
    <div className="p-8 flex flex-col gap-8 border border-primary-700 rounded-4xl">
      <div className="flex flex-col gap-3">
        <span className="text-heading-1-bold">{PRODUCT.name}</span>
        <span className="text-body-2-regular">{PRODUCT.description}</span>
      </div>
      <ProductColors colors={PRODUCT.colors} />
      <ProductMaterial materials={PRODUCT.materials} />

      {/* PERSONALIZATION */}
      <div className="flex flex-col p-4 gap-3 bg-[#292929] rounded-2xl">
        <span className="text-heading-5-bold">Personalize</span>
        {hasPersonalization ? (
          <div className="flex gap-2 justify-between">
            <div className="flex items-center gap-3">
              {logoImage && (
                <div className="size-10 rounded-md overflow-hidden flex-shrink-0 bg-black/20">
                  <img
                    src={logoImage}
                    alt={logoName}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <span className="text-body-1-medium text-white">{logoName}</span>
            </div>
            <Link href={productId + "/personalize"} className="max-w-8">
              <img src="/products/edit.svg" alt="" />
            </Link>
          </div>
        ) : (
          <>
            <span className="text-body-1-medium text-text-tertiary">
              Personalize it with your logo or let it feature the default
              Connfct logo.
            </span>
            <Link
              href={productId + "/personalize"}
              className="py-4 px-6 rounded-2xl bg-primary-600 text-white flex justify-center gap-4 items-center cursor-pointer text-body-2-medium"
            >
              Personalize your Identity
              <span className="size-7 aspect-square flex items-center justify-center bg-white rounded-full text-primary-900-main">
                <ArrowUpRight className="size-3" />
              </span>
            </Link>
          </>
        )}
      </div>

      <button className="p-4 bg-white shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 rounded-full text-black text-body-1-bold flex items-center justify-center gap-4 cursor-pointer">
        Preview
        <span className="bg-black text-white size-8 aspect-square flex items-center justify-center rounded-full">
          <ChevronDoubleDownIcon className="size-4 text-white" />
        </span>
      </button>
    </div>
  );
};

export default ProductDetailCard;
