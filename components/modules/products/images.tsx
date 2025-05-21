const ProductImages = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex justify-center items-center size-[632px] bg-[#292929] rounded-4xl">
        <img src="/home/ring.png" alt="" className="size-[450px]" />
        <div className="flex gap-3 absolute bottom-5 right-5">
          <button>
            <img src="/products/download.svg" alt="" />
            <span className="sr-only">Download</span>
          </button>
          <button>
            <img src="/products/fullscreen.svg" alt="" />
            <span className="sr-only">Fullscreen</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 *:size-[148px] *:bg-[#292929] *:rounded-4xl *:flex *:justify-center *:items-center">
        <div>
          <img src="/home/ring.png" alt="" className="size-[120px]" />
        </div>
        <div>
          <img src="/home/ring.png" alt="" className="size-[120px]" />
        </div>
        <div>
          <img src="/home/ring.png" alt="" className="size-[120px]" />
        </div>
        <div>
          <img src="/home/ring.png" alt="" className="size-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
