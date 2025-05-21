import Footer from "components/layout/footer";
import GetStarted from "components/modules/home/get-started";
import ProductDetailCard from "components/modules/products/details";
import ProductImages from "components/modules/products/images";
import ProductPreviewDetail from "components/modules/products/preview/details";
import PreviewImage from "components/modules/products/preview/image";
import PreferredEquipment from "components/modules/products/preview/preferred-equipment";

const ProductDetailSection = () => {
  return (
    <div className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white">
      <ProductImages />
      <ProductDetailCard />
    </div>
  );
};

const ProductPreviewSection = () => {
  return (
    <div className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white">
      <div className="flex flex-col gap-8">
        <PreviewImage />
        <PreferredEquipment />
      </div>
      <div className="flex flex-col gap-3">
        <ProductPreviewDetail />
        <span className="text-body-1-regular text-text-tertiary">
          Have a unique vision in mind?{" "}
          <span className="text-white text-body-1-bold">Contact us</span> to
          tailor your luxury NFC experience.
        </span>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  return (
    <>
      <div className="relative bg-primary-850 rounded-[32px] w-full px-[60px] py-4 mt-1 grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white h-[96px]" />
      <ProductDetailSection />
      <ProductPreviewSection />
      <GetStarted />
      <Footer />
    </>
  );
};

export default ProductDetail;
