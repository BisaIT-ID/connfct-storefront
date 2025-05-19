import { Send } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="bg-primary-850 rounded-[32px] w-full relative flex flex-col gap-12 max-w-[1440px] h-[797px] mx-auto text-white">
      <img
        src="/home/get-started.png"
        className="w-full h-full object-cover rounded-[32px] absolute"
        alt=""
      />
      <div className="flex flex-col h-full justify-between p-[60px] z-[1]">
        <h1 className="text-[80px] font-bold max-w-[50%]">
          Connected in Every Tap
        </h1>
        <div className="flex w-full justify-end">
          <div className="py-2 px-3 bg-white rounded-[100px] w-fit shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 inline-flex justify-center items-center gap-4">
            <span className="justify-start text-neutral-900 text-base font-medium leading-snug">
              Get Started
            </span>
            <div className="bg-black rounded-full p-2">
              <Send className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
