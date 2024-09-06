import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaList, FaAngleDown } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ShopFilter = () => {
  const total = useSelector((state) => state.product.total);
  const params = useParams();
  const history = useHistory();

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      filter: "",
      order: "price:asc",
    },
  });

  const onSubmit = (data) => {
    history.push(
      `/shop/${params.gender}/${params.categoryName}/${params.categoryId}?&filter=${data.filter}&order=${data.order}`
    );
  };

  const handleOrderChange = (value) => {
    setValue("order", value);
  };

  const selectedOrder = watch("order");

  return (
    <div className="flex flex-col items-center justify-between w-full relative">
      <div className="flex flex-col gap-[20px] lg:flex-row items-center justify-between w-[80%]">
        <p>Showing all {total} results</p>
        <div className="flex items-center gap-[15px]">
          <h6>Views:</h6>
          <div className="rounded-md border-light-gray-2 border-[1px] p-[15px]">
            <IoGrid />
          </div>
          <div className="rounded-md border-light-gray-2 border-[1px] p-[15px]">
            <FaList />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="dropdown-button flex items-center gap-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center gap-4"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Order <FaAngleDown className="inline ml-[10px]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuRadioGroup
                    value={selectedOrder}
                    onValueChange={(value) => handleOrderChange(value)}
                  >
                    <DropdownMenuRadioItem value="price:asc">
                      Price: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="price:desc">
                      Price: High to Low
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="rating:asc">
                      Rating: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="rating:desc">
                      Rating: High to Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Label htmlFor="filter">Filter</Label>
              <Input
                id="filter"
                placeholder="Enter key words"
                {...register("filter")}
              />

              <PrimaryButton type="submit">
                <h6 className="montserrat-h6">Apply</h6>
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
