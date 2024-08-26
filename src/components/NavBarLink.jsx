import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBarLink = (prop) => {
  const { link } = prop;

  return (
    <li>
      <Link
        className="font-[montserrat] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373]"
        to={link.link}
      >
        {link.text}
        {link.down && <link.down className="inline" />}
      </Link>
    </li>
  );
};

export default NavBarLink;
