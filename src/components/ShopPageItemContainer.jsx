import React from "react";
import ShopPageItemCard from "./ShopPageItemCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const ShopPageItemContainer = (props) => {
  const { items } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center my-[48px] px-[30px]">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] justify-between w-[80%]">
        {items.map((item, index) => (
          <ShopPageItemCard key={index} item={item} />
        ))}
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ShopPageItemContainer;
