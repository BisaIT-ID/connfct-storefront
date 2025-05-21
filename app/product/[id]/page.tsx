import Footer from "components/layout/footer";
import GetStarted from "components/modules/home/get-started";
import ProductDetailCard from "components/modules/products/details";
import ProductImages from "components/modules/products/images";

const ProductDetailSection = () => {
  return (
    <div
      id="home"
      className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto text-white"
    >
      <ProductImages />
      <ProductDetailCard />
    </div>
  );
};

const ProductDetail = () => {
  return (
    <>
      <ProductDetailSection />
      <GetStarted />
      <Footer />
    </>
  );
};

export default ProductDetail;
