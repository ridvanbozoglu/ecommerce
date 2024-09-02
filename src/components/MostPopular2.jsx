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

const colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

const MostPopular2 = () => {
  return (
    <div className="flex bg-white justify-center w-full py-[48px]">
      <div className="lg:w-[80%] flex gap-[30px] flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <MostPopularImage
            order={4}
            src="https://s3-alpha-sig.figma.com/img/7b48/0f4e/eb94313e5df675c7986d5dc3ce4b1d30?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=biNiKEOHM8SyTwnioAjQ2LmOmQPtU8WHX3uNwXXHCFumqBKFF7rVeBHL2SyjEPRMdQt4MBgQBPcyAaTDIc-g-~gaQD6Toru7a36NWOEcrz-Nccc9U-GYIkAIJZMzCIEdi8f0thnY2LLkI3JuTkCtwG0n4HGqLLpguKuAj~DFHOyTvbDrVMX9vkeqTGF4XTsxRccArjWn30w0OY35jUO2a9BIszBoLyVLg06dJgDUTJMmTimgNTUUboN5rZaTbd5Xj18bvOTq1zLblpHpI6CUL8pMwjerTTx0pN1iK5FXLtsAkWj569DzZcx5ob3b1qYZOe0QVxdBqo1g0iuw05i8Bw__"
          />
          <MostPopularCard item={card} totalSale={15} colorPalette={colors} />
        </div>
      </div>
    </div>
  );
};

export default MostPopular2;
