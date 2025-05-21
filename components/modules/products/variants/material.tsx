"use client";
import { useState } from "react";


interface Props {
  materials: {
    name: string;
    price: number;
    materials: { name: string; id: string }[];
  }[];
}

const ProductMaterial = ({ materials }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-heading-5-bold">Material</h3>
      {materials.map((material) => (
        <MaterialType
          key={material.name}
          name={material.name}
          price={material.price}
          materials={material.materials}
        />
      ))}
    </div>
  );
};

interface MaterialTypeProps {
  name: string;
  price: number;
  materials: { name: string; id: string }[];
}

const MaterialType = ({ name, price, materials }: MaterialTypeProps) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    materials[0]?.id || ""
  );

  return (
    <div>
      <div className="flex flex-col gap-3">
        <span className="text-text-tertiary text-body-1-medium">
          {name} <span className="text-white">(${price})</span>
        </span>
        <div className="flex gap-2">
          {materials.map((material) => (
            <button
              key={material.name}
              onClick={() => setSelectedMaterial(material.id)}
              className={`rounded-2xl py-3 px-6 border border-primary-700 text-text-tertiary cursor-pointer text-body-2-medium ${
                selectedMaterial === material.id
                  ? "border-white bg-white !text-black"
                  : ""
              }`}
            >
              {material.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMaterial;
