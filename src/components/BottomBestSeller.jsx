import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ab5b/a03f/e3a1e9916ed9bb795f661a218944204f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nddMlDIUHyrbeugUMlvjG~-h22Avmg-XUWiUZED1zI3M-bLC513QWvMRiPOeMbvri2JGFK3at84IVbQd9qQW8kmor3BVUWv9AZmXry9wTPMLheD0WiecYimI9a64B~5bcTh9rooN7hZHIxO9gqL71R3QuYfei-DeVZ4ayESwpLjmXXAagEXYpMuQyJgHvJK2e1lkD~BM-Dc3ZJVYS62ATCX4WoBNc1Yx1wyQH~8p4VJpJ--Glie9Y2ZwSTPfAQg5tt1B5Y3InPYj4taog74Ho~ZibgOvXEL8-rGeCNCdgVuXORx7f9GtxIhA6ogq1NZwJey8bXbMxA~XxZoypuUHcA__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d700/b3e0/d1b1b5630c31252e2085a6e9c12310a7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPTXF9WEFleHK7WBrhOVrfLZj8EeDTrd21reBk2rXSL56PIHKWOH8D4ZLOkjBl0yKorwRsHH7cMe9tLSwgsJkT0cfGyf6v0D5OUOg3vk4JFPqhVU7I70SehKV7OTdDNLEKOfuTWEHmEmyskzCAmXIQgZT601wWN0UKw2sqTrk3jnPoDIKOnM7HI2KRsZx2PSqoK3nT24WgA6U1Oix-AVtL53jm6fGjC8PUnqJO-4kc1~dDRbmbRVmKmSW-OAOJyDY1Dykm39aWZON4qTBttBtx3PhS8KYy02Xle1XPoM4eYFjw-m6ttZw5kBYSnP8mXJTUHxyQnHhehel06iv-1VRA__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b940/2a1e/e5a2039e4d5c84c4727011bd5f439d31?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4hxZIl2YJ-9yQQa0SVJEJclQiQaFXfi759efZ42QfyM3-nCDFP6~pkGAku6uzDN43rchH2IfTJUpVRCDETQ2zW5gbpnJPkIZJhjR3axzAGJMUCQjnBUy4bE~1USB2qDqt6VK-7OlFqKreO1tgkxi78koVqXO9zGABsaawjTMgu3hBfFq~oxwdCZ~9n0f8xQuerEnymF7ZrezdxpcOfLI9tELdbGn5-32rPyxKc8-hIHGMAAypWwguWBH9dsTaAlSq6pL02NZtLlHe6v9cEI5IlSIvSYKexkF1izK5icVTdnWF1yWtPh1wRI1MJJIMYBtgqkwPzrPdy0f2t3UP1FFw__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c7ce/8fc9/ae05f3d29c3ccc71bbfd4054c7ac7acc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8UolAqsUP1t1HqEjRXQeO-~Gq1ueMiGSIAf-oAhGBt5HpGwnI5r5YzzGjwaZ3~aXxUXLu-On9hgTsAnJIHnFt0tnNcFXKCYSegVUHMVJLSn2ems3ReClver8G-2pa6LqV4DIPnUC76UlXaAyDhoSpzG~9NR021phLadSKexBF41AQSUvS92nZ3V4sqtsoN7fof1eOcyHqiMZXsRotmzx-rVhT4HXSklvHMg~Lrka4qUk5y9dNeEUiX1oDF-1AcicIvj1cFovgIzl5aov2TLkZ-r~WXNZrUAZDrxtWJ5KBMsKNp1c3hjjVyy2GlLquWBqsxvSzhXJewQ3X~YC85p2w__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
];

const BottomBestSeller = () => {
  return (
    <div className="w-[80%] py-[48px]">
      <div>
        <h3 className="montserrat-h3 text-[#252B42]">BESTSELLER PRODUCTS</h3>
        <div className="h-[2px] bg-[#ECECEC] my-3 w-full"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
          {items.map((item, index) => (
            <ItemCard itemData={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBestSeller;
