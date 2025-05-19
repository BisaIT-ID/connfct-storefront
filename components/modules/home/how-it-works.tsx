import { ArrowDown, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="relative bg-primary-850 rounded-[32px] w-full p-[60px] grid lg:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col p-8 gap-8">
        <div className="text-center text-white text-base font-medium leading-snug px-3 py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-3 w-fit">
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
          How It Works
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-5xl font-bold">
            Are you still sharing your identity the old way?
          </span>
          <p className="text-lg text-text-secondary">
            The way we connect says everything. First impressions matter.
            Traditional methods no longer keep up with modern expectations.
          </p>
        </div>
      </div>

      {[
        "Stuck With Tools That No Longer Represent You",
        "Wasting Time on a System That Slows You Down",
        "Wasting Time on a System That Slows You Down",
      ].map((caption, index) => (
        <Card caption={caption} index={index + 1} key={index} />
      ))}

      <div className="relative rounded-4xl overflow-clip">
        <img
          src="/home/how-it-works.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="absolute top-8 left-8 w-full h-full text-[32px]">
          YOUR <br />
          SOLUTION IS ME
        </span>
      </div>

      <div className="flex items-center justify-center">
        <ArrowDown className="size-10" />
      </div>
    </div>
  );
};

interface CardProps {
  caption: string;
  index: number;
}

const Card = ({ caption, index }: CardProps) => {
  return (
    <div className="flex flex-col p-8 justify-between bg-[#292929] h-[506px] rounded-4xl">
      <div className="flex justify-between">
        <div className="size-11 rounded-full flex items-center justify-center bg-gray-50 text-[#292929] font-bold">
          {index}
        </div>
        <span className="*:size-3 *:border *:border-white *:rounded-full flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={i <= index - 1 ? "bg-white" : ""}></div>
          ))}
        </span>
      </div>

      <div className="flex flex-col gap-20">
        <span className="max-w-[80%] text-[32px] font-bold">{caption}</span>
        <span>#PROBLEM{index}</span>
      </div>
    </div>
  );
};

export default HowItWorks;
