import React from "react";

const BestSellerProducts = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[48px] lg:py-[48px] lg:w-[80%] w-full px-2">
      <div className="lg:w-[390px] sm:py-[48px] relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/6e29/64f8/744f4e734b4d2dd0c1041ae3d0687be0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UONOEUNH7dL30I-IrmLjHDe1TZjkIwu5uoQdIRodVkpGT0cWe8LytVYt3wq0tzjmDco9GZX0IT~ZzHJgxishL7wKwuUYUDdgtlXUI1tlGSj3QAvrT58v4R8yD~NmueTMmspwYQmll0dp3gGKsbWsIJEAPjix3ZlmVH6RE7lw4DpLIUKHDwDypx0oBCGZxd0~e4yMvGoMGwrfNc6wV5SexDdPq6XtcLmEoY8jt4QZ2ituO91p75WAWj~unkfK2eq7srog8EsKQXDPVzz~8xO3rAYJPJPosbm0uEQeya1co0UEp4LlWhhle7r1gjtYxf3UiLET4Qz~AVpOeKMN0e7Hlw__"
          alt=""
          className="w-full"
        />
        <div className="absolute top-8 left-8">
          <h6 className="montserrat-h6 text-[#252B42]">Fornuture</h6>
          <h6 className="text-[#737373] montserrat-h6">5 items</h6>
        </div>
      </div>
      <div className="lg:flex-1"></div>
    </div>
  );
};

export default BestSellerProducts;
