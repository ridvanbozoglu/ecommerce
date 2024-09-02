import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUf8FrZA4Mjc1blm771-SRFi2EMma849S45G9KMDpAtm2obDqWNQTO2OoPc35lnNsHAjD-ixMEs-E5JWK6Y-T0Wf1aTQUzLmcXURJs9Kw5cDctFY8rdxI9gbqqcBmm6-eH1xTbvSANntItDfVM6nbMLXZ3H03xMaraifYmjxp5PH-DtnA9IfzbrmfA3jFH~Na4xc7cc3DXrovHQhexGB8bfkynx2o1OnAW2GnYtVEYhia~cVxVkXBsCD91f45ATiOhkVCDghH9zoHe~VkNAu-bGtecFTCOH-MFE71IMvdhH1IylpAl7zTuQDXKMgRd-eeHF-q6hVtVqfF0~5zpl9kQ__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZUAJ6xw8FJD4o4QLYk9VObIofbADijs8b3V1qCrMnLBEpqc75oser5WWKkkt5dmu6n~4pKe4lswevgYJP9n3EDRle~3VZss1h9R7cvZ3eIUmL4xnXY2IPHjIsaraobYk4um9rd0ltuKZCjPJ5~QUDF5uFmytszZAB9Obt0lecE-YfuPbs-jBuldy1hUg2pVHcR8Il7Ab2d4~y3PkwhJ1b1w~cV~YvIaD0mJgV9o5k7lL6UlpqJqbDl4s3dFcL1FKGA5qdNmxP2V5ojpsAZv5NpQ4IcDOvEqX~uiLWESJtMdXLXv9aMxGLnj6oDtnk1v5jD77wLDGoedTCup1eVglw__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KR0lXWJcvBzlDFPIe22SprCHjaH~YkMAc-71RbUJp34b8vGap1sawrmpUIr3HYU3IpAwjCbcV9822fhTfrEXIEakH2uSgSx5TpmkGIbWPZ5~VSabqlI-uqQreUyTHU2PkR~SoHaU2vtgIXvbkvgeZq6DARvKL2OOpnYNGYbAxzegsplpH-G9l97UIFPTDLdScO27Bt5ZvTXb-Ov-x7u0DL9BZEvaU0NA83nKwCGmA5voZFd9MiPnISWNn7SRiFDYHnMYHfn1BC~yT6HhpasEqIM-ffq8FYs7jUp0n137p4wLsDSC2xiVTk-OGG86MGQlJzH3UhPF4ypTtmc2hsT3zw__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUf8FrZA4Mjc1blm771-SRFi2EMma849S45G9KMDpAtm2obDqWNQTO2OoPc35lnNsHAjD-ixMEs-E5JWK6Y-T0Wf1aTQUzLmcXURJs9Kw5cDctFY8rdxI9gbqqcBmm6-eH1xTbvSANntItDfVM6nbMLXZ3H03xMaraifYmjxp5PH-DtnA9IfzbrmfA3jFH~Na4xc7cc3DXrovHQhexGB8bfkynx2o1OnAW2GnYtVEYhia~cVxVkXBsCD91f45ATiOhkVCDghH9zoHe~VkNAu-bGtecFTCOH-MFE71IMvdhH1IylpAl7zTuQDXKMgRd-eeHF-q6hVtVqfF0~5zpl9kQ__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZUAJ6xw8FJD4o4QLYk9VObIofbADijs8b3V1qCrMnLBEpqc75oser5WWKkkt5dmu6n~4pKe4lswevgYJP9n3EDRle~3VZss1h9R7cvZ3eIUmL4xnXY2IPHjIsaraobYk4um9rd0ltuKZCjPJ5~QUDF5uFmytszZAB9Obt0lecE-YfuPbs-jBuldy1hUg2pVHcR8Il7Ab2d4~y3PkwhJ1b1w~cV~YvIaD0mJgV9o5k7lL6UlpqJqbDl4s3dFcL1FKGA5qdNmxP2V5ojpsAZv5NpQ4IcDOvEqX~uiLWESJtMdXLXv9aMxGLnj6oDtnk1v5jD77wLDGoedTCup1eVglw__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KR0lXWJcvBzlDFPIe22SprCHjaH~YkMAc-71RbUJp34b8vGap1sawrmpUIr3HYU3IpAwjCbcV9822fhTfrEXIEakH2uSgSx5TpmkGIbWPZ5~VSabqlI-uqQreUyTHU2PkR~SoHaU2vtgIXvbkvgeZq6DARvKL2OOpnYNGYbAxzegsplpH-G9l97UIFPTDLdScO27Bt5ZvTXb-Ov-x7u0DL9BZEvaU0NA83nKwCGmA5voZFd9MiPnISWNn7SRiFDYHnMYHfn1BC~yT6HhpasEqIM-ffq8FYs7jUp0n137p4wLsDSC2xiVTk-OGG86MGQlJzH3UhPF4ypTtmc2hsT3zw__",
    header: "Graphic Design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
  },
];

const BestSellerProducts = (props) => {
  const { id } = props;
  return (
    <div className="w-full bg-white flex  items-center justify-center">
      <div className="flex flex-col lg:flex-row lg:gap-[48px] lg:py-[48px] lg:w-[80%] w-full  ">
        <div
          className={`lg:w-[390px]  relative ${id === 2 ? "lg:order-[1]" : ""}`}
        >
          <img
            src={`${
              id === 2
                ? "https://s3-alpha-sig.figma.com/img/7a2e/08ce/36eea85e103afd61deff01ad078a9903?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AmqD0mZ-ZA4Tb4wxaOfJthkO8K30saeLDJb7NXxjSx1~XoFUyzD2yhhS3QAAgbhRdm3TH2Z-9Dy1B0lbm8BNWcEY~DrRy1fpnQKSvyd7jeqAxaqgiIG8AhCltl9NFseJ7fDY4zYd0owjf8DOKNYgQXEC9VSDB05uB-YOl7IVFnMEg9f1mb8LQX7SNmVHS5xO7v3zlYmL7knul406weGq8lf1x9XT6JU6aXA8zri~et0k8-x6hEytEqmtOgZEHhZFE9Fp9CoK5zIJn208Dh2oUfDfNEb1E~oeIDdcBp254sgZCg4tAWK9MxUqT6KQsaqqemn13PACMB1~izvDGBMPYA__"
                : "https://s3-alpha-sig.figma.com/img/6e29/64f8/744f4e734b4d2dd0c1041ae3d0687be0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UONOEUNH7dL30I-IrmLjHDe1TZjkIwu5uoQdIRodVkpGT0cWe8LytVYt3wq0tzjmDco9GZX0IT~ZzHJgxishL7wKwuUYUDdgtlXUI1tlGSj3QAvrT58v4R8yD~NmueTMmspwYQmll0dp3gGKsbWsIJEAPjix3ZlmVH6RE7lw4DpLIUKHDwDypx0oBCGZxd0~e4yMvGoMGwrfNc6wV5SexDdPq6XtcLmEoY8jt4QZ2ituO91p75WAWj~unkfK2eq7srog8EsKQXDPVzz~8xO3rAYJPJPosbm0uEQeya1co0UEp4LlWhhle7r1gjtYxf3UiLET4Qz~AVpOeKMN0e7Hlw__"
            }`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h6 className="montserrat-h6 text-[#252B42]">Fornuture</h6>
            <h6 className="text-[#737373] montserrat-h6">5 items</h6>
          </div>
        </div>
        <div className="lg:flex-1 py-[80px] lg:py-0">
          <div className=" flex flex-col lg:flex-row justify-between items-center">
            <h5 className="montserrat-h5 text-[#252B42]">
              BESTSELLER PRODUCTS
            </h5>
            <ul className="flex  items-center gap-[10px] py-6">
              <li className="montserrat-h6 py-[10px] px-[20px]">Men</li>
              <li className="montserrat-h6 py-[10px] px-[20px]">Woman</li>
              <li className="montserrat-h6 py-[10px] px-[20px]">Accessories</li>
            </ul>
            <div className="flex justify-center items-center gap-[10px] pb-6">
              <div className="flex justify-center items-center gap-4">
                <button className="w-[48px] h-[48px] rounded-[34px] border border-[#BDBDBD] p-[14px_20px] text-[#737373] flex items-center justify-center text-xl">
                  &lt;
                </button>
                <button className="w-[48px] h-[48px] rounded-[34px] border border-[#BDBDBD] p-[14px_20px] text-[#737373] flex items-center justify-center text-xl">
                  &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-[#ECECEC] my-3 w-full"></div>
          <div className="flex flex-wrap p-6">
            {items.map((item, index) => (
              <ItemCard itemData={item} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;
