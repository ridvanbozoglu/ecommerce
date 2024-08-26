import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimaryButton from "./PrimaryButton";

const carouselItems = [
  {
    src: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/41ac46667d323180dce928ef7d68c973672e86ee.jpeg",
    alt: "First slide",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    src: "https://www.macfit.com/wp-content/uploads/2024/04/hamburger-kac-kalori.jpg",
    alt: "Second slide",
    title: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    src: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg",
    alt: "Third slide",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
];

function MyCarousel() {
  return (
    <Carousel className="h-[640px] bg-[rgba(0,0,0,0.35)] border border-[#DEDEDE]">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} className="relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.alt}
          />
          <Carousel.Caption className="flex flex-col items-center gap-[24px]">
            <h2 className="montserrat-h2">{item.title}</h2>
            <p className="montserrat-h4">{item.description}</p>
            <PrimaryButton>Start now</PrimaryButton>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
