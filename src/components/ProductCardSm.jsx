import React from "react";

const items = [
  {
    src: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/41ac46667d323180dce928ef7d68c973672e86ee.jpeg",
    label: "Kısır",
    description: "Lezzetli ve hafif bir bulgur salatası.",
  },
  {
    src: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg",
    label: "Pizza",
    description: "Bol malzemeli ev yapımı pizza.",
  },
  {
    src: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/12/ev-koftesi-resimli-yemek-tarifi(11).jpg",
    label: "Köfte",
    description: "Klasik ve lezzetli köfte tarifi.",
  },
];

const ProductCardSm = () => {
  return (
    <ul className="flex flex-col lg:flex-row py-[80px] sm:gap-[10px] lg:w-[80%] lg:justify-between flex-wrap">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[332px] h-[232px] relative border border-[#ECECEC] p-[10px] bg-[#FFFFFF]"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="z-10 h-full flex flex-col justify-center w-[50%] gap-[10px]">
              <h6 className="text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">
                {item.description}
              </h6>
              <h3 className="text-[#252B42] font-montserrat font-bold text-[20px] leading-[24px] tracking-[0.2px]">
                {item.description}
              </h3>
              <p className="text-[#252B42] font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px]">
                {item.description}
              </p>
            </div>
            <img
              src={item.src}
              alt={item.label}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ProductCardSm;
