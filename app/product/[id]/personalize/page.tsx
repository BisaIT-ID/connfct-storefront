import Footer from "components/layout/footer";
import Personalization from "components/modules/products/personalization";
import PreviewImage from "components/modules/products/preview/image";
import { notFound } from "next/navigation";

interface PersonalizeProductProps {
  params: {
    id: string;
  };
}

const PersonalizeProduct = ({ params }: PersonalizeProductProps) => {
  // Extract the product ID from the URL parameters
  const productId = params.id;

  // If there's no ID, return 404
  if (!productId) {
    notFound();
  }

  return (
    <>
      <div className="relative bg-primary-850 rounded-[32px] w-full px-[60px] py-4 mt-1 grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white h-[96px]" />
      <div
        id="home"
        className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white"
      >
        <PreviewImage downloadButton={false} />
        <Personalization productId={productId} />
      </div>
      <Footer />
    </>
  );
};

export default PersonalizeProduct;
