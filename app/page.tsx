import Footer from "components/layout/footer";
import HowItWorks from "components/modules/home/how-it-works";
import { Send, Zap } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  description: "Elevate how you connection with Connfct",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}

const Hero = () => {
  return (
    <div className="relative bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-8 max-w-[1440px] mx-auto">
      <div className="h-[80px]" />
      <div className="flex flex-col gap-4">
        <div className="text-center text-white text-base font-medium leading-snug px-3 py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-3 w-fit">
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
          NFC Product
          <div className="rounded-full bg-white p-1 w-fit">
            <Zap className="text-black size-3" fill="#000" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="w-[50%] justify-start text-white text-7xl font-bold leading-[86.40px]">
            Elevate how you connection <br />
            with Connfct
          </h1>
          <div className="p-4 rounded-3xl outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-start items-center gap-4 overflow-hidden w-fit">
            <div className="rounded-md bg-white p-2">
              <Zap className="text-black" fill="#000" />
            </div>
            <span className="flex-1 justify-start text-white text-xl font-medium leading-normal max-w-64">
              No apps, no friction, just pure elegance
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <img
          className="w-48 h-fit rounded-[20px]"
          src="https://placehold.co/200x100"
        />
        <img
          className="w-full h-fit max-h-[330px] object-cover rounded-[32px] self-end mr-4"
          src="https://placehold.co/309x320"
        />
        <div className="flex flex-col gap-8 mr-4">
          <span className="justify-start text-white text-3xl font-light uppercase leading-10 mt-6">
            Share your identity, social links or contact details instantly by
            tapping.
          </span>
          <img
            className="w-full h-fit rounded-3xl"
            src="https://placehold.co/417x198"
          />
        </div>
        <div className="flex flex-col gap-4 items-center w-full -translate-y-20">
          <img
            className="w-full h-fit max-h-[330px] object-cover rounded-[32px]"
            src="https://placehold.co/328x320"
          />
          <div className="py-2 px-3 bg-white rounded-[100px] shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 inline-flex justify-center items-center gap-4">
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

