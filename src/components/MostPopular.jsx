import React from "react";

import MostPopularImage from "./MostPopularImage";
import MostPopularCard from "./MostPopularCard";

const count = [
  {
    number: 1,
    h6: " Easy to use",
    smallP: "Things on a very  small that you have any direct",
  },
  {
    number: 2,
    h6: " Easy to use",
    smallP: "Things on a very  small that you have any direct",
  },
  {
    number: 3,
    h6: " Easy to use",
    smallP: "Things on a very  small that you have any direct",
  },
  {
    number: 4,
    h6: " Easy to use",
    smallP: "Things on a very  small that you have any direct",
  },
];

const card = {
  header: "MOST POPULAR",
  paragraph:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  imageUrl:
    "https://s3-alpha-sig.figma.com/img/e43d/8ea6/b4108cbd028fc3719beccb40231bf020?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxO-sGZgSCOeS8Wak6OgXVfzPrW5qb8lzHbKfnJpMzCXOVqcHQnM~syt8Ijsvm3D1gftmdGy~phP1PerVqv4aB~FrOLsaz22AtXVntPAy3YdJLY-7j2iAXktnaTJI-gHs6r5sOPe~D2GXXqBpnPcVDH1eThdbkZe1dcb8W2lIeJsaigQYPuT~Sdt2HrvYdVh-sNJz2lS6VRmDoRC1ya9x8QqY~PRmxp43j11L0N-VpvX4Gr22VMOXqUGK-gre9k6naYScN9fIlXmV0uL7AgHMBexIIF~5mD3GGlzaT9edZH3kFVTrXHSM9AnyKz87JFUYijqAf65xo8KB7tgNWesLw__",
  link: "#",
  linkP: "English Department",
  fullPrice: 16.48,
  discountedPrice: 6.48,
};

const MostPopular = () => {
  return (
    <div className="flex bg-white justify-center w-full py-[48px]">
      <div className="lg:w-[80%] flex gap-[30px] flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[20px]">
          <MostPopularImage src="https://s3-alpha-sig.figma.com/img/4f83/d305/c7cf97d501907ed12bf338b0a82cc287?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfAByDYAH0ApOs9NhPjWnZYZB42YWihfTuv1YAWhmMkqfIPJwir07PhiXAerBJeenun4~EJseZo7Fozn~J9olNVXdCyPGzT0Gnvz5i4yeiwkKwcxjIxryfZ01c~wuQ8xSWCOmHzGVJgaRUsvkRlt9PknD7Tl3PHE5lDvroWgSNRdvOhkr7~jpNbp3gDtdcOWQHVp-DB8eemA3Cv9-oFepKwrifzrtaFD2IJsjKloLF2wLZM51AuvkKPRBbPM0JDNaxSGaYt1dmFIDWlH~t5p1AFL-onkXvcbWTACTRjgGhFQwgt8qrsW3Fv7N1-8W4kW6tDB3M7LiqrKTw0txDKB2A__" />
          <MostPopularCard item={card} />
        </div>
        <div className="flex flex-col lg:flex-row justify-between ">
          {count.map((el) => (
            <div
              key={el.number}
              className="flex gap-[20px] flex-1 p-[25px] mx-[30px] lg:mx-0"
            >
              <h2 className="text-[#E74040] montserrat-h2">{el.number}.</h2>
              <div className="flex gap-[5px] flex-col items-start">
                <h6 className="montserrat-h6">{el.h6}</h6>
                <p className="font-[montserrat] font-normal text-[12px] leading-[16px] tracking-[0.2px]">
                  {el.smallP}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
