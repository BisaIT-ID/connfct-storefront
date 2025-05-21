"use client";
import { useState } from "react";

interface Props {
  colors: {
    name: string;
    price: number;
    colors: { name: string; color: string }[];
  }[];
}

const ProductColors = ({ colors }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-heading-5-bold">Color</h3>
      {colors.map((color) => (
        <ColorType
          key={color.name}
          name={color.name}
          price={color.price}
          colors={color.colors}
        />
      ))}
    </div>
  );
};

interface ColorTypeProps {
  name: string;
  price: number;
  colors: { name: string; color: string }[];
}

const ColorType = ({ name, price, colors }: ColorTypeProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[0]?.color || ""
  );

  return (
    <div>
      <div className="flex flex-col gap-3">
        <span className="text-text-tertiary text-body-1-medium">
          {name} <span className="text-white">(${price})</span>
        </span>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.color)}
              className={`ring-2 rounded-xl p-2 ring-black cursor-pointer ${
                selectedColor === color.color ? "ring-white" : ""
              }`}
            >
              <div
                className="size-[46px] aspect-square rounded-lg border border-white"
                style={{ backgroundColor: color.color }}
              />
            </button>
          ))}
        </div>
        <span className="text-text-white-stroke text-body-2-regular">
          {colors.find((color) => color.color === selectedColor)?.name}
        </span>
      </div>
    </div>
  );
};

export default ProductColors;
