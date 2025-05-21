const PreferredEquipment = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-heading-2-bold">Preferred Equipments</span>
      <div className="flex flex-col gap-4">
        <PreferredEquipmentItem
          variant="Color"
          value="Red"
          color="#AE1B1B"
          price="5,90"
        />
        <PreferredEquipmentItem variant="Material" value="Plastic" price="0" />
      </div>
    </div>
  );
};

interface PreferredEquipmentItemProps {
  variant: string;
  value: string;
  color?: string;
  price: string;
}

const PreferredEquipmentItem = ({
  variant,
  value,
  color,
  price,
}: PreferredEquipmentItemProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-body-1-regular uppercase">#{variant}</span>
      <div className="flex justify-between *:w-full items-center p-4 px-6 rounded-2xl border border-[#292929]">
        <span className="flex items-center gap-2 text-body-1-medium text-text-tertiary">
          {variant}:{" "}
          <span className="flex items-center gap-2 text-body-1-bold text-white">
            {value}{" "}
            {color && (
              <div
                className="size-5 aspect-square rounded-md"
                style={{ backgroundColor: color }}
              ></div>
            )}
          </span>
        </span>
        <span className="flex items-center gap-2 text-body-1-medium text-text-tertiary">
          Price: <span className="text-body-1-bold text-white">${price}</span>
        </span>
        <button className="max-w-8">
          <img src="/products/edit.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default PreferredEquipment;
