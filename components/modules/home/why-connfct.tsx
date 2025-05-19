import { Zap } from "lucide-react";

const WhyConnfct = () => {
  return (
    <div className="bg-primary-850 rounded-[32px] w-full p-[60px] flex flex-col gap-12 max-w-[1440px] mx-auto text-white">
      <div className="flex justify-between items-end gap-8">
        <div className="flex flex-col gap-6 w-full">
          <div className="text-center text-white text-base font-medium leading-snug px-3 py-2 bg-black rounded-[100px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-3 w-fit">
            <div className="rounded-full bg-white p-1 w-fit">
              <Zap className="text-black size-3" fill="#000" />
            </div>
            Why Connfct
            <div className="rounded-full bg-white p-1 w-fit">
              <Zap className="text-black size-3" fill="#000" />
            </div>
          </div>

          <span className="text-5xl font-bold">
            A New Era of Connection Where Elegance Meets Effortless Innovation
          </span>
        </div>

        <p className="text-text-secondary max-w-[30%]">
          Connfct transforms the way you share your professional identity,
          bringing together cutting-edge technology and luxurious design in a
          single, effortless gesture.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 h-[506px]">
        <div className="relative rounded-4xl overflow-clip">
          <img
            src="/home/why-connfct/1.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute left-8 bottom-8 flex flex-col gap-3">
            <span className="text-2xl">#BENEFIT1</span>
            <div className="flex flex-col gap-2">
              <span className="text-[28px] font-bold">Premium Design</span>
              <span>
                Crafted from stainless steel, silver, and gold, Connfct’s
                minimalist design exudes luxury.
              </span>
            </div>
          </div>
        </div>
        <div className="relative rounded-4xl bg-[#292929] overflow-clip">
          <img
            src="/home/why-connfct/2.png"
            className="w-full object-cover absolute bottom-0"
            alt=""
          />
          <div className="absolute p-8 flex flex-col h-full gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-[28px] font-bold">
                Security and Privacy
              </span>
              <span>
                Your information is shared only when you choose. No more risk of
                losing your business card or sensitive data.
              </span>
            </div>
            <div className="text-2xl h-full flex items-center">#BENEFIT2</div>
          </div>
        </div>
        <div className="relative rounded-4xl overflow-clip">
          <img
            src="/home/why-connfct/3.png"
            className="w-full h-full object-cover absolute"
            alt=""
          />
          <div className="absolute p-8 h-full flex flex-col justify-between gap-3">
            <span className="text-2xl">#BENEFIT3</span>
            <div className="flex flex-col gap-2">
              <span className="text-[28px] font-bold">Sleek and Practical</span>
              <span>
                A seamless, refined gesture that offers convenience with
                elegance, making the perfect first impression every time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConnfct;
