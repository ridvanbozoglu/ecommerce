import React, { useState, useEffect } from "react";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { Slider } from "./ui/slider";

const filters = [
  {
    header: "Filter By Category",
    pickType: "radio",
    selections: [
      "Bedroom",
      "Decor",
      "Decoration",
      "Kitchen",
      "Lamp",
      "Lamp",
      "lighting",
      "Decor",
    ],
  },
  {
    header: "Filter By Brand",
    pickType: "checkbox",
    selections: [
      "Bedroom",
      "Decor",
      "Decoration",
      "Kitchen",
      "Lamp",
      "Lamp",
      "lighting",
      "Decor",
    ],
  },
  {
    header: "Filter By Color",
    pickType: "radio",
    selections: ["Blue", "Green", "Orange", "Dark Blue"],
  },
];

const ShopFilter = () => {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".dropdown-button") &&
        !event.target.closest(".bottom-0")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full relative">
      <div className="flex flex-col gap-[20px] lg:flex-row items-center justify-between w-[80%]">
        <p>Showing all {items.length} results</p>
        <div className="flex items-center gap-[15px]">
          <h6>Views:</h6>
          <div className="rounded-md  border-light-gray-2 border-[1px] p-[15px]">
            <IoGrid />
          </div>
          <div className="rounded-md  border-light-gray-2 border-[1px] p-[15px]">
            <FaList />
          </div>
        </div>
        <div className="dropdown-button">
          <PrimaryButton onClick={handleButtonClick}>
            <h6 className="montserrat-h6 ">Filter</h6>
          </PrimaryButton>
        </div>
      </div>
      {isOpen && (
        <div className="bottom-0 left-0 w-full bg-white shadow-md  py-[48px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col lg:flex-row justify-between w-[80%] gap-4">
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className="flex flex-col py-[24px] gap-[25px]"
                  >
                    <h3 className="montserrat-h3">{filter.header}</h3>
                    <ul>
                      {filter.selections.map((selection, selectionIndex) => (
                        <li key={selectionIndex}>
                          <label className="flex items-center space-x-2">
                            <input
                              type={filter.pickType}
                              name={filter.header}
                              value={selection}
                              {...register(`${filter.header}`, {
                                defaultChecked:
                                  selection === filter.selections[0],
                              })}
                              className="form-checkbox"
                            />
                            <span className="montserrat-h6 text-[#737373]">
                              {selection}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex flex-col gap-[15px] mt-[25px]">
                  <h3 className="montserrat-h3">Filter By Price</h3>
                  <Slider defaultValue={[500]} max={1000} step={1} />
                  <div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <input
                          type="number"
                          id="minPrice"
                          placeholder="0"
                          {...register("minPrice", { valueAsNumber: true })}
                          className="border rounded px-2 py-1 w-[100px]"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          id="maxPrice"
                          placeholder="1000"
                          {...register("maxPrice", { valueAsNumber: true })}
                          className="border rounded px-2 py-1 w-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShopFilter;
