const FEATURES = [
  {
    title: "Discreet NFC Integration",
    caption:
      "Invisible NFC tech seamlessly integrates, making sharing your information as simple as a tap.",
    className: "top-[35px] right-[22px]",
  },
  {
    title: "Minimalist Aesthetic",
    caption:
      "With a clean, sleek design, Connfct rings offer timeless elegance that suits any style.",
    className: "top-[112px] left-0",
  },
  {
    title: "Material Excellence",
    caption:
      "Connfct rings are crafted from premium metals for a refined, durable feel that elevates every connection.",
    className: "left-[90px] bottom-[109px]",
  },
  {
    title: "Luxury in Every Detail",
    caption:
      "Every Connfct ring exudes luxury, from its smooth finish to its flawless, functional design.",
    className: "right-0 bottom-0",
  },
];

const Features = () => {
  return (
    <div className="bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-12 max-w-[1440px] mx-auto text-white">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl font-bold">Transform the Way You Connect</h1>
        <p className="text-text-secondary max-w-[418px] mx-auto">
          Discover how Connfct redefines networking with unmatched elegance and
          innovation.
        </p>
      </div>

      <div className="relative h-[819px]">
        <img
          src="/home/features.png"
          alt=""
          className="w-full h-full object-contain"
        />
        {FEATURES.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            caption={feature.caption}
            className={feature.className}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  caption: string;
  className?: string;
}

const Card = ({ title, caption, className }: CardProps) => {
  return (
    <div
      className={`absolute flex gap-4 p-6 bg-[#292929] rounded-[20px] w-[419px] ${className}`}
    >
      <img
        src="https://placehold.co/96x96"
        alt=""
        className="size-[96px] rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold">{title}</span>
        <span className="text-sm">{caption}</span>
      </div>
    </div>
  );
};

export default Features;
