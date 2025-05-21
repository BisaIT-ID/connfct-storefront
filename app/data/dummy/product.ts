const PRODUCT = {
  name: "Connfct Card",
  description:
    "A card designed for digital identity, crafted for exclusive access.",
  colors: [
    {
      name: "Base Color",
      price: 0,
      colors: [
        { name: "Black", color: "#000" },
        { name: "Grey", color: "#8B8A9A" },
        { name: "White", color: "#fff" },
      ],
    },
    {
      name: "Special Color",
      price: 5.9,
      colors: [
        { name: "Red", color: "#AE1B1B" },
        { name: "Blue", color: "#332BAD" },
        { name: "Green", color: "#23BDC5" },
      ],
    },
  ],

  materials: [
    {
      name: "Base Material",
      price: 0,
      materials: [
        { name: "Plastic", id: "1" },
        { name: "Metal", id: "2" },
      ],
    },
    {
      name: "Special Material",
      price: 5.9,
      materials: [
        { name: "Gold", id: "3" },
        { name: "Silver", id: "4" },
      ],
    },
  ],
};

export default PRODUCT;
