import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import PRODUCT from "app/data/dummy/product";
import { ArrowUpRight } from "lucide-react";
import ProductColors from "./variants/color";
import ProductMaterial from "./variants/material";

const ProductDetailCard = () => {
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
        <span className="text-body-1-medium text-text-tertiary">
          Personalize it with your logo or let it feature the default Connfct
          logo.
        </span>
        <button className="py-4 px-6 rounded-2xl bg-primary-600 text-white flex justify-center gap-4 items-center cursor-pointer text-body-2-medium">
          Personalize your Identity
          <span className="size-7 aspect-square flex items-center justify-center bg-white rounded-full text-primary-900-main">
            <ArrowUpRight className="size-3" />
          </span>
        </button>
      </div>

      <button className="p-4 bg-white rounded-full text-black text-body-1-bold flex items-center justify-center gap-4 cursor-pointer">
        Preview
        <span className="bg-black text-white size-8 aspect-square flex items-center justify-center rounded-full">
          <ChevronDoubleDownIcon className="size-4 text-white" />
        </span>
      </button>
    </div>
  );
};

export default ProductDetailCard;
