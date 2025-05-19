import { Send, Zap } from "lucide-react";

const FEATURES = [
  {
    title: "Design Your Own Profile",
    caption: "Customize layout, styles, and content freely.",
    image: "/home/premium-features/1.png",
  },
  {
    title: "Flexible Editing",
    caption: "Update your details anytime and anywhere.",
  },
  {
    title: "Exclusive Access",
    caption:
      "Enjoy early access to new drops, special discounts, and premium templates.",
    image: "/home/premium-features/2.png",
  },
  {
    title: "Smart Sharing & Insights",
    caption: "Update your details anytime and anywhere.",
    image: "/home/premium-features/3.png",
  },
  {
    title: "Cloud Backup & Integrations",
    caption:
      "Securely store your info and connect with tools like Notion and Zapier.",
  },
];

const PremiumFeatures = () => {
  return (
    <div className="bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-12 max-w-[1440px] mx-auto text-white">
      <div className="flex justify-between items-end gap-8">
        <div className="flex flex-col gap-6 w-full max-w-[60%]">
          <div className="text-center text-white text-base font-medium leading-snug px-3 py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-3 w-fit">
            <div className="rounded-full bg-white p-1 w-fit">
              <Zap className="text-black size-3" fill="#000" />
            </div>
            Connfct+
            <div className="rounded-full bg-white p-1 w-fit">
              <Zap className="text-black size-3" fill="#000" />
            </div>
          </div>

          <span className="text-5xl font-bold">
            Upgrade to Connfct+ for Premium Features
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {FEATURES.slice(0, 3).map((feature, index) => (
          <Card key={index} {...feature} index={index + 1} />
        ))}
        <div className="p-8 flex items-center">
          <div className="py-2 px-3 pr-2 border border-white w-fit rounded-[100px] text-white inline-flex justify-center items-center gap-4">
            <span className="justify-start text-base font-medium leading-snug">
              Get Connfct+
            </span>
            <div className="bg-white text-black rounded-full p-2">
              <Send className="w-3 h-3" fill="black" />
            </div>
          </div>
        </div>
        {FEATURES.slice(3).map((feature, index) => (
          <Card key={index} {...feature} index={index + 4} />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  caption: string;
  image?: string;
  index: number;
}

const Card = ({ title, caption, image, index }: CardProps) => {
  return (
    <div className="relative rounded-4xl overflow-clip aspect-square bg-[#292929]">
      {image && (
        <img src={image} alt="" className="w-full h-full object-cover" />
      )}
      <div
        className={`flex flex-col absolute p-8 gap-6 bottom-0 w-full z-[1] ${!image ? "h-full justify-between" : ""}`}
      >
        <span className="text-[28px] font-bold">Connfct+</span>
        <div className="flex flex-col gap-3">
          <span className="text-[28px] font-bold">{title}</span>
          <span>{caption}</span>
        </div>
        <span>#FEATURE{index}</span>
      </div>
    </div>
  );
};

export default PremiumFeatures;
