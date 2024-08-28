import React from "react";
import HomeBigCard from "./HomeBigCard";

const cardItems = [
  {
    populer: [
      {
        name: "Googel",
        link: "#",
      },
      {
        name: "Trending",
        link: "#",
      },
      {
        name: "New",
        link: "#",
      },
    ],
    heading: "Loudest à la Madison #1 (L'integral)",
    paragraph:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    numberOfComments: 10,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~KDlg-jHPbJvrgxzQ0K~Qf8PELRAIzF~09E11vCXyZ1Ix-6JJx8-uho1uPExFGQv05TBiJuxR8jXbs8PoMgVWqpkqelpGLgjSiFjofsh79nP8t14GU~caxj8ZEAWKDyIV29Rmxiqj4hE9osct7IDahZ7g0GlYfzb2EHzv8lP05~fRkr3NUxlNsF95OAW1Un7FpiCVxBkUwaqTqIeTn1hXaSOcSl8wQ258UZLF-BI2VWifwxYarsMUGV3~mq8L0yVC9UZY7BmjpLOVBO1ohsszReBf~~5pOBFhrb8TKRfzbyebFUWkukIGozmR6dVsQ80rnY8dLtmDAW7mJWcHtgoA__",
    link: "#",
    isNew: true,
  },
  {
    populer: [
      {
        name: "Googel",
        link: "#",
      },
      {
        name: "Trending",
        link: "#",
      },
      {
        name: "New",
        link: "#",
      },
    ],
    heading: "Loudest à la Madison #1 (L'integral)",
    paragraph:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    numberOfComments: 10,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1k0VQVRBrQB52wkmXu4N7bIRskFosli9f3D~AttjhSFeBfyEqD0qprTaiCYNJnC~8ROkdPXbkNWo4jrPKLc-Yhk8vIoeLIX-RzEUmMfeISdIT~bZuYEMasJX4i7PS9VNDECzOuL6HzNJ8y8g5iG9wPeT9lVfMldEBy12YtkPgUU2KpbnLTHxv0xGzLoYLLcJS~agMAe4AH7al3W7db2GauV3HqYWaNzn4y2cpVUsTpRHfIDmSWS0NyhyvsEeSYqwW41BdIkTkUZBUIDhCFroJjYvVV7dMsKxNXqbKaEJKJAoe~RT1QDee4Z78OSDm1BMTxCyl60sF-mwxvVjxWMhw__",
    link: "#",
    isNew: true,
  },
  {
    populer: [
      {
        name: "Googel",
        link: "#",
      },
      {
        name: "Trending",
        link: "#",
      },
      {
        name: "New",
        link: "#",
      },
    ],
    heading: "Loudest à la Madison #1 (L'integral)",
    paragraph:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    numberOfComments: 10,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-RyhkseFwHeBEFjP~O~WDuhYWCXdhoFlL-6zx5P3Ntf4j4F0Y7gc2aMy5GHCu9VJCdGQsSangBziukvW4tqJ8K8pw4bBG8c0SohmwnWeE-BEvcgcr1VQoNxpiQAMBy6QZ5o0VxldRPX0j4r4bRyb2Pltvbcde4gpzWXhTmmo2kmjiQuHWTLWXVDXR~49eqyq7ol-~z5MDyQWl7lp5EiyL19f~1SoIvZ~ry21L7P23x~69ao0MJYc0FSzYMY1-y9ZZt3G4blSh6HqZEh~z8vxSYqJVr4gDhoqUhwyXWWzl40bZ16P-0y~kKCEk~uKQgO0b~CBtHtM1hb8oU5QSk5oQ__",
    link: "#",
    isNew: true,
  },
];

const FeaturedPosts = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-[80%] py-[112px] flex flex-col gap-[80px]">
        <div className="flex flex-col items-center gap-[10px]">
          <p className="montserrat-h6 text-[#23A6F0]">Practice Advice</p>
          <h2 className="montserrat-h2 text-[#252B42]">Featured Posts</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {cardItems.map((card, index) => (
            <HomeBigCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
