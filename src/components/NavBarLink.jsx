import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { categoriesThunk } from "../redux/reducers/productReducer";
import { FaAngleDown } from "react-icons/fa";
import { separateAndSortByRating, turkishToEnglish } from "../utils/utils";

const NavBarLink = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const [isOpen, setIsOpen] = useState(false);

  const [maleCategories, femaleCategories] =
    separateAndSortByRating(categories);

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".cursor-pointer")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <ul className="lg:flex hidden gap-4 font-[montserrat] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373]">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="cursor-pointer">
        <div className="relative">
          <div onClick={handleButtonClick}>
            Shop
            <FaAngleDown className="inline" />
          </div>
          {isOpen && (
            <div className="absolute flex z-10 bg-white p-[25px]">
              <div className="pr-[100px] pl-[20px]">
                <h3 className="montserrat-h3 text-black pb-[20px]">Erkek</h3>
                <ul className="flex flex-col items-start gap-[10px]">
                  {maleCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={`/shop/erkek/${turkishToEnglish(category.title)}/${
                          category.id
                        }`}
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pr-[100px] pl-[20px]">
                <h3 className="montserrat-h3 text-black pb-[20px]">Kadın</h3>
                <ul className="flex flex-col items-start gap-[10px]">
                  {femaleCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={`/shop/kadin/${turkishToEnglish(category.title)}/${
                          category.id
                        }`}
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <li>
        <Link to="/">Pages</Link>
      </li>
    </ul>
  );
};

export default NavBarLink;

// {
//   "id": 1,
//   "code": "k:tisort",
//   "title": "Tişört",
//   "img": "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_tişört.jpg",
//   "rating": 4.2,
//   "gender": "k"
// },
