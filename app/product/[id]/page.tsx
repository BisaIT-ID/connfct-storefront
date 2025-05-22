import Footer from "components/layout/footer";
import GetStarted from "components/modules/home/get-started";
import ProductDetailCard from "components/modules/products/details";
import ProductImages from "components/modules/products/images";
import ProductPreviewDetail from "components/modules/products/preview/details";
import PreviewImage from "components/modules/products/preview/image";
import PreferredEquipment from "components/modules/products/preview/preferred-equipment";
import { notFound } from "next/navigation";

const ProductDetailSection = ({ params }: ProductDetailProps) => {
  // Extract the product ID from the URL parameters
  const productId = params.id;

  // If there's no ID, return 404
  if (!productId) {
    notFound();
  }

  return (
    <div className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white">
      <ProductImages />
      <ProductDetailCard productId={productId} />
    </div>
  );
};

const ProductPreviewSection = ({ params }: ProductDetailProps) => {
  // Extract the product ID from the URL parameters
  const productId = params.id;

  // If there's no ID, return 404
  if (!productId) {
    notFound();
  }

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

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  // Extract the product ID from the URL parameters
  const productId = params.id;

  // If there's no ID, return 404
  if (!productId) {
    notFound();
  }

  return (
    <>
      <div className="relative bg-primary-850 rounded-[32px] w-full px-[60px] py-4 mt-1 grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white h-[96px]" />
      <ProductDetailSection params={params} />
      <ProductPreviewSection params={params} />
      <GetStarted />
      <Footer />
    </>
  );
};

export default ProductDetail;
