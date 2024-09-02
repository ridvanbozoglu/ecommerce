import React from "react";

const products = [
  {
    link: "#",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SnySb3GCDBrxhD01EyGzIugs5stDcA7npLdiw5sgmUQQPJhaCyz36n6yt5Sid6K4ggguZRugueuizcX4OTggSg4gau~rbuargICRv1BpUMD3c5UANcXmqmqUdDzXoz4pwcjqxLwTcFu4X2NsspRipf9DZDL8sCXehejRV-LzDR~Bq9C3pNFSc68mSYr3qcDSaSES9Q8taN5zkaojhVcCxMUct9yqShyoChAjsmkLrSXauN0Ba1O~ChgZGElmDVPVjumuwadrUD~HZr~O6upF~E44kUtpCpM5osKzaTPMBMRd-j49XDjQbqldUI7au~9Nr6P2AJJa50g366UfJFWhLA__",
    header: "CLOTHS",
    numberOfItems: 5,
  },
  {
    link: "#",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jxoas9HLBww8zrltIq3kYxP97Tm-iaIWVOyZJtASwLiTjOXfbzN-l1EcaJTxW-fm-BD4OC8M1GEJcUoFfMt8ZvaMMiVLjomWr-KsTiU2UsZtwhHSUEk83wKEh7GPt663XwMqoC7DGmXi3DbuMAkZ~6dielaOe0PBYuySF-ISJUiMSdhsiHNBSYlMVPylIFle4rOvx23B2Zn8mhfq94x~mDBVDsNOBhWogiYt8721vef4nDkBLOhrw78Jf3Dz9~FRoiznwEvxQGAuZP~LOJWa0hHTsZGUPAPoRM6Rvaa-Nw8nnBqomel0XWw3N2EuTEZM7w86~qbPcVh2F2hzjR0BVw__",
    header: "CLOTHS",
    numberOfItems: 5,
  },
  {
    link: "#",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6e72/2a25/b740dd4eea5b5580d5e1601a818f98c2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hw2lWupCYqtP3szIiK7o7V93eFmtesNF-tq5oFDSYGOOiQxAX5bALidZdN4N9-xspops96CKXF4Z4ik3ao2oGUULKr6dQT1tmvjYjB8UMbdo6zempOjgjzxmGQoo2gyKIsGi6Q6NBWY17Ko4-WH0GGjDVS0W18dMOSsIk7ztcoefbkWvW95mTOFyV~pcaO6r4sq3u5FIp5QclqabDRXN5bQqovYISAV1XbWZUGDSL-q5TOsWdk0yUk-yBbx1zRxFwTI2WbtCkDCYvCFLEAMicLVJVt8jeWvOPKUJ-bqyboam5Z--5PdAhTgWtFqLDquaGNBJsT-0wWzI0e5XZsh89A__",
    header: "CLOTHS",
    numberOfItems: 5,
  },
  {
    link: "#",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7bc2/f9fb/559eeb7e6b92ed49f40128729a9f74f1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QfFbk3IsBUEBeD6isPb~T6wvrEXadcye43ZEFTa7qEzXj00RxHn48uRL1hYgKE785MjhaLaKIMmQanBkJgY-V9G8DN0rR516~nc6qQeMYCw1Jk9MWF4Mdd4OQh3~94Bir~AF0GLdUK9--48IUyYk53IhPk4QgKe0TsdOkwTRv7lDkwa7V7j8D-qmELaiOInChxvWPl9eXa8Khs9NGhUsyfTf2iK3P8f8zFBrUCHeEiGSzL4sJVOEScbppoxipIB8Yt0RPLN1u~cjE5P5ceVopoQkyb-94OAzknOHrbQw2~lNbtvTGF-VvTI11iLnj55Bjx5~5lHDZvBtbbIctWo65Q__",
    header: "CLOTHS",
    numberOfItems: 5,
  },
  {
    link: "#",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2650/d8d7/92d83e3292df63340b2a44fd9763c159?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=me3RMU7plWiOHtldCnzxAdJfqrA3OyCNm6IbfUQJm6t5kT5WlOiy1NN0tNuH0kGqTNGN5eXKPa6cHcF0CMz-YjdZqBE1TJdnsvGT62rXXPZi~Vt7YNCV1uAh7KJInqM8rGYH0VIMvUg2StczkYKzZ~ZKs0Xxd-oP5FTO1dsXK4okNTgwVsnx8ihLnDbGumWkEjspaZVzIL3nPKlroUHkhbWngl4RnkLZ1p32f-mXaSZmGsUuFHjPtUrEs65WN39EHxTJmI8xVv-QP1KUZ8Rek5-KQbhBxv66G4pF1Ft7Vag8xv20i88-jxMnftVJKtqazjuDGSipXq60qmaIdsFHhQ__",
    header: "CLOTHS",
    numberOfItems: 5,
  },
];

const ShopPageSmCard = (props) => {
  const { item } = props;
  return (
    <div className="pb-[48px] flex flex-col lg:flex-row items-center justify-between gap-[15px] w-[80%]">
      {products.map((item, index) => (
        <div className="lg:w-[18%] relative" key={index}>
          <img src={item.imageUrl} alt="" />
          <div className="transformAbsoluteToMiddle text-white">
            <h5 className="montserrat-h5">{item.header}</h5>
            <p>{item.numberOfItems} Items</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPageSmCard;
