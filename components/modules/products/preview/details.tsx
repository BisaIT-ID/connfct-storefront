import PRODUCT from "app/data/dummy/product";

const ProductPreviewDetail = () => {
  return (
    <div className="p-8 flex flex-col gap-8 border border-primary-700 rounded-4xl">
      <div className="flex flex-col gap-3">
        <span className="text-heading-1-bold">Preview {PRODUCT.name}</span>
        <span className="text-body-2-regular">{PRODUCT.description}</span>
      </div>

      {/* INVOICE */}
      <div className="flex flex-col p-6 gap-8 bg-[#292929] rounded-4xl">
        <span className="text-heading-5-bold">Invoice</span>
        <div className="flex flex-col gap-6 pb-10 border-b border-dashed border-primary-600 text-body-1-regular">
          <div className="flex justify-between">
            <span className="text-text-tertiary">Base Price</span>
            <span>$74,90</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-tertiary">Customization Service</span>
            <span>$20,90</span>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-heading-5-bold">
          <span>Total</span>
          <span>$95,80</span>
        </div>
      </div>

      <button className="p-4 bg-white shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 rounded-full text-black text-body-1-bold flex items-center justify-center gap-4 cursor-pointer">
        Buy Now
      </button>
      <button className="p-4 text-white border border-primary-700 rounded-full text-body-1-bold flex items-center justify-center gap-4 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPreviewDetail;
