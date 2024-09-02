import React, { useState } from "react";
import ShopPageSmCard from "./ShopPageSmCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronRight } from "react-icons/fa";
import ShopFilter from "./ShopFilter";
import ShopPageItemContainer from "./ShopPageItemContainer";
import Clients from "./Clients";

const defaultItems = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-hJ5BnGsadKV9zHXC~k1uonSYzJ~DrnMgMG9vAZ~-8rxktM-Tjfps0WYI0Thmil19zsuyZGhkP4gD1kU~C3Qo0escbGZwWiHUKBXqWsjheH1e6UKDnI9RP-s2OO2IlsdJdSVh0yr1aB2f7zYz~juo0CG7cbbreHIE8HWaTmd7pZEcMtHI-lM9qFaOxVCs6ncfioaWbwvWz5n66h~klF2JfvLPIFoIjuqjvQQITGNQTrxmmHUFu5QZLiApoZSOPFBzZznZ7FuQgxxpxkFm1I6s-L0cM8nmkniYHVm1Kk5t9c9itaUuugrtjStQo~a5YNTZHl~G~yQMRG7O6mAJbD6g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pb9dBoWRp7HAWTXQxDpHA3b1iiSvdFNKimdEYW-BR5eUPn7jJmE6qBNqX7PRvHEC-jvvwlv9RX6L8s7i5TOwOOaiM6a~iyk2NXZ6vBlhUFtLfrYcICALScD2cmJRSM20OykbFhoNqTu5CuvFNVBSzWfOc5KpZbhIos06muRh2MYfkcd9La8XAA-DhZ310vaylF6D-wJsNThriEw7WiwQxkk6t6pGgSjh6mDEOjX2UCVCDCXPdd0ZnTFFnMgO~NNklKAJKmn6upBy-mU3dmXDNu4HrQeWKq8Q9NXeZG5aUnvYgrqFR4R7y2r7HLNSD9eTpjGVxJaZXHEny6Rw1lkk1g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGKpVQm8BoyOIJdyWGnU3YAWjapR~xIndY6o2cwuLSyn5hIsFiciSfu4QmiyQeRnFGIszaxjMDdz2fmMoJB2rHX7mFgUyzIUcIYXBHxvCVApnXbK0QPzwqOpBZXpDIGjxl-LdE11nBWPGXB2z7eGGRoV8x1XuQZOyPpC4QlVkY94z6dkyU4FVWkBQI06sY~nXPCvnFOtJspSXYTfXUdLJ1fA2fWNBegWxDPjSk~uET1JhTjYBnMxzrtNUF3~c5PUhICpfpab5rS1R-7RAc32dUuH4GP~uz4tqMgcQYiKAkP6x914P01Ve4NVXv1AObA7e7kNn8oK5yzlyt9z4VhUlA__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob3yYOqpyMMrLqXf4uF8qsoxOxso1w8XJiU3V8DvDgaD2Y2zVRZIkohAfCMEpmbVwmA-fhb~sZCMyaZnwcT57KuU2yXIT5BePWOhrHomFDKdH7Su~Kig5ZB9vnQcywQSsqQh2l-fjUGJl1Se3Feft7NiiyJqXC5a~HGRkyBzyp2wqMv1NrZnui~7q7EMgz498EoBmcloICAf2np-~h30dLTos6IgoUZGpdnBHhoxTpkGoMWZOSLCJn2-83hNBJni8IwsQ3oRWT9O8moTERYXfq-rFPLvmGj1HB5TVb6dvlcIL7Fn-cn0hUTxW4LHtn~xomERn~3ZVAGKjfiR9~C12A__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-hJ5BnGsadKV9zHXC~k1uonSYzJ~DrnMgMG9vAZ~-8rxktM-Tjfps0WYI0Thmil19zsuyZGhkP4gD1kU~C3Qo0escbGZwWiHUKBXqWsjheH1e6UKDnI9RP-s2OO2IlsdJdSVh0yr1aB2f7zYz~juo0CG7cbbreHIE8HWaTmd7pZEcMtHI-lM9qFaOxVCs6ncfioaWbwvWz5n66h~klF2JfvLPIFoIjuqjvQQITGNQTrxmmHUFu5QZLiApoZSOPFBzZznZ7FuQgxxpxkFm1I6s-L0cM8nmkniYHVm1Kk5t9c9itaUuugrtjStQo~a5YNTZHl~G~yQMRG7O6mAJbD6g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pb9dBoWRp7HAWTXQxDpHA3b1iiSvdFNKimdEYW-BR5eUPn7jJmE6qBNqX7PRvHEC-jvvwlv9RX6L8s7i5TOwOOaiM6a~iyk2NXZ6vBlhUFtLfrYcICALScD2cmJRSM20OykbFhoNqTu5CuvFNVBSzWfOc5KpZbhIos06muRh2MYfkcd9La8XAA-DhZ310vaylF6D-wJsNThriEw7WiwQxkk6t6pGgSjh6mDEOjX2UCVCDCXPdd0ZnTFFnMgO~NNklKAJKmn6upBy-mU3dmXDNu4HrQeWKq8Q9NXeZG5aUnvYgrqFR4R7y2r7HLNSD9eTpjGVxJaZXHEny6Rw1lkk1g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGKpVQm8BoyOIJdyWGnU3YAWjapR~xIndY6o2cwuLSyn5hIsFiciSfu4QmiyQeRnFGIszaxjMDdz2fmMoJB2rHX7mFgUyzIUcIYXBHxvCVApnXbK0QPzwqOpBZXpDIGjxl-LdE11nBWPGXB2z7eGGRoV8x1XuQZOyPpC4QlVkY94z6dkyU4FVWkBQI06sY~nXPCvnFOtJspSXYTfXUdLJ1fA2fWNBegWxDPjSk~uET1JhTjYBnMxzrtNUF3~c5PUhICpfpab5rS1R-7RAc32dUuH4GP~uz4tqMgcQYiKAkP6x914P01Ve4NVXv1AObA7e7kNn8oK5yzlyt9z4VhUlA__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob3yYOqpyMMrLqXf4uF8qsoxOxso1w8XJiU3V8DvDgaD2Y2zVRZIkohAfCMEpmbVwmA-fhb~sZCMyaZnwcT57KuU2yXIT5BePWOhrHomFDKdH7Su~Kig5ZB9vnQcywQSsqQh2l-fjUGJl1Se3Feft7NiiyJqXC5a~HGRkyBzyp2wqMv1NrZnui~7q7EMgz498EoBmcloICAf2np-~h30dLTos6IgoUZGpdnBHhoxTpkGoMWZOSLCJn2-83hNBJni8IwsQ3oRWT9O8moTERYXfq-rFPLvmGj1HB5TVb6dvlcIL7Fn-cn0hUTxW4LHtn~xomERn~3ZVAGKjfiR9~C12A__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-hJ5BnGsadKV9zHXC~k1uonSYzJ~DrnMgMG9vAZ~-8rxktM-Tjfps0WYI0Thmil19zsuyZGhkP4gD1kU~C3Qo0escbGZwWiHUKBXqWsjheH1e6UKDnI9RP-s2OO2IlsdJdSVh0yr1aB2f7zYz~juo0CG7cbbreHIE8HWaTmd7pZEcMtHI-lM9qFaOxVCs6ncfioaWbwvWz5n66h~klF2JfvLPIFoIjuqjvQQITGNQTrxmmHUFu5QZLiApoZSOPFBzZznZ7FuQgxxpxkFm1I6s-L0cM8nmkniYHVm1Kk5t9c9itaUuugrtjStQo~a5YNTZHl~G~yQMRG7O6mAJbD6g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pb9dBoWRp7HAWTXQxDpHA3b1iiSvdFNKimdEYW-BR5eUPn7jJmE6qBNqX7PRvHEC-jvvwlv9RX6L8s7i5TOwOOaiM6a~iyk2NXZ6vBlhUFtLfrYcICALScD2cmJRSM20OykbFhoNqTu5CuvFNVBSzWfOc5KpZbhIos06muRh2MYfkcd9La8XAA-DhZ310vaylF6D-wJsNThriEw7WiwQxkk6t6pGgSjh6mDEOjX2UCVCDCXPdd0ZnTFFnMgO~NNklKAJKmn6upBy-mU3dmXDNu4HrQeWKq8Q9NXeZG5aUnvYgrqFR4R7y2r7HLNSD9eTpjGVxJaZXHEny6Rw1lkk1g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGKpVQm8BoyOIJdyWGnU3YAWjapR~xIndY6o2cwuLSyn5hIsFiciSfu4QmiyQeRnFGIszaxjMDdz2fmMoJB2rHX7mFgUyzIUcIYXBHxvCVApnXbK0QPzwqOpBZXpDIGjxl-LdE11nBWPGXB2z7eGGRoV8x1XuQZOyPpC4QlVkY94z6dkyU4FVWkBQI06sY~nXPCvnFOtJspSXYTfXUdLJ1fA2fWNBegWxDPjSk~uET1JhTjYBnMxzrtNUF3~c5PUhICpfpab5rS1R-7RAc32dUuH4GP~uz4tqMgcQYiKAkP6x914P01Ve4NVXv1AObA7e7kNn8oK5yzlyt9z4VhUlA__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob3yYOqpyMMrLqXf4uF8qsoxOxso1w8XJiU3V8DvDgaD2Y2zVRZIkohAfCMEpmbVwmA-fhb~sZCMyaZnwcT57KuU2yXIT5BePWOhrHomFDKdH7Su~Kig5ZB9vnQcywQSsqQh2l-fjUGJl1Se3Feft7NiiyJqXC5a~HGRkyBzyp2wqMv1NrZnui~7q7EMgz498EoBmcloICAf2np-~h30dLTos6IgoUZGpdnBHhoxTpkGoMWZOSLCJn2-83hNBJni8IwsQ3oRWT9O8moTERYXfq-rFPLvmGj1HB5TVb6dvlcIL7Fn-cn0hUTxW4LHtn~xomERn~3ZVAGKjfiR9~C12A__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-hJ5BnGsadKV9zHXC~k1uonSYzJ~DrnMgMG9vAZ~-8rxktM-Tjfps0WYI0Thmil19zsuyZGhkP4gD1kU~C3Qo0escbGZwWiHUKBXqWsjheH1e6UKDnI9RP-s2OO2IlsdJdSVh0yr1aB2f7zYz~juo0CG7cbbreHIE8HWaTmd7pZEcMtHI-lM9qFaOxVCs6ncfioaWbwvWz5n66h~klF2JfvLPIFoIjuqjvQQITGNQTrxmmHUFu5QZLiApoZSOPFBzZznZ7FuQgxxpxkFm1I6s-L0cM8nmkniYHVm1Kk5t9c9itaUuugrtjStQo~a5YNTZHl~G~yQMRG7O6mAJbD6g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pb9dBoWRp7HAWTXQxDpHA3b1iiSvdFNKimdEYW-BR5eUPn7jJmE6qBNqX7PRvHEC-jvvwlv9RX6L8s7i5TOwOOaiM6a~iyk2NXZ6vBlhUFtLfrYcICALScD2cmJRSM20OykbFhoNqTu5CuvFNVBSzWfOc5KpZbhIos06muRh2MYfkcd9La8XAA-DhZ310vaylF6D-wJsNThriEw7WiwQxkk6t6pGgSjh6mDEOjX2UCVCDCXPdd0ZnTFFnMgO~NNklKAJKmn6upBy-mU3dmXDNu4HrQeWKq8Q9NXeZG5aUnvYgrqFR4R7y2r7HLNSD9eTpjGVxJaZXHEny6Rw1lkk1g__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGKpVQm8BoyOIJdyWGnU3YAWjapR~xIndY6o2cwuLSyn5hIsFiciSfu4QmiyQeRnFGIszaxjMDdz2fmMoJB2rHX7mFgUyzIUcIYXBHxvCVApnXbK0QPzwqOpBZXpDIGjxl-LdE11nBWPGXB2z7eGGRoV8x1XuQZOyPpC4QlVkY94z6dkyU4FVWkBQI06sY~nXPCvnFOtJspSXYTfXUdLJ1fA2fWNBegWxDPjSk~uET1JhTjYBnMxzrtNUF3~c5PUhICpfpab5rS1R-7RAc32dUuH4GP~uz4tqMgcQYiKAkP6x914P01Ve4NVXv1AObA7e7kNn8oK5yzlyt9z4VhUlA__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob3yYOqpyMMrLqXf4uF8qsoxOxso1w8XJiU3V8DvDgaD2Y2zVRZIkohAfCMEpmbVwmA-fhb~sZCMyaZnwcT57KuU2yXIT5BePWOhrHomFDKdH7Su~Kig5ZB9vnQcywQSsqQh2l-fjUGJl1Se3Feft7NiiyJqXC5a~HGRkyBzyp2wqMv1NrZnui~7q7EMgz498EoBmcloICAf2np-~h30dLTos6IgoUZGpdnBHhoxTpkGoMWZOSLCJn2-83hNBJni8IwsQ3oRWT9O8moTERYXfq-rFPLvmGj1HB5TVb6dvlcIL7Fn-cn0hUTxW4LHtn~xomERn~3ZVAGKjfiR9~C12A__",
    header: "Graphic Design",
    link: "/shop/graphic-design",
    explanation: "English Department",
    fullPrice: 16.48,
    discount: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

const ShopPageShopSection = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <div className="bg-[#FAFAFA] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center lg:flex-row flex-col justify-between py-[24px] w-[80%]">
          <h3 className="montserrat-h3">Shop</h3>
          <div className="text-[#BDBDBD] flex items-center gap-[15px] py-[10px]">
            <Link>Home</Link>
            <FaChevronRight />
            <Link>Shop</Link>
          </div>
        </div>
        <ShopPageSmCard />
        <ShopFilter />
        <ShopPageItemContainer items={items} />
        <Clients />
      </div>
    </div>
  );
};

export default ShopPageShopSection;
