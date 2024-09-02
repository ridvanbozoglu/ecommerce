import React from "react";
import PropTypes from "prop-types";

const Button = ({
  icon = false,
  rounded = true,
  outlined = false,
  iconLeft = false,
  dropdown = false,
  onClick = () => {},
  className,
  children,
}) => {
  let classes = "px-[40px] py-[15px] ";

  if (rounded) classes += "rounded-[5px] ";
  if (outlined)
    classes += "border-2 border-[#23A6F0] text-[#23A6F0] bg-transparent ";
  else classes += "bg-[#23A6F0] text-white ";

  return (
    <button
      className={`${classes} flex items-center ${className}`}
      onClick={onClick}
    >
      {iconLeft && icon && <span className="mr-2">Icon</span>}
      {children}
      {dropdown && <span className="ml-2">▼</span>}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.bool,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  iconLeft: PropTypes.bool,
  dropdown: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
