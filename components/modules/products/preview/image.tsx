interface Props {
  downloadButton?: boolean;
  fullscreenButton?: boolean;
}
const PreviewImage = ({
  downloadButton = true,
  fullscreenButton = true,
}: Props) => {
  return (
    <div className="relative flex justify-center items-center size-[632px] bg-[#292929] rounded-4xl">
      <img src="/home/ring.png" alt="" className="size-[450px]" />
      <div className="flex gap-3 absolute bottom-5 right-5">
        {downloadButton && (
          <button>
            <img src="/products/download.svg" alt="" />
            <span className="sr-only">Download</span>
          </button>
        )}
        {fullscreenButton && (
          <button>
            <img src="/products/fullscreen.svg" alt="" />
            <span className="sr-only">Fullscreen</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PreviewImage;
