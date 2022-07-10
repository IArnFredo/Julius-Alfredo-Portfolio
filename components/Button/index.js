import React from "react";

const Button = ({ children, type, onClick }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="mob:text-sm laptop:text-baselaptop:mx-6 rounded-lg text-white">
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="mob:text-sm laptop:text-base  m-1 mob:m-1 laptop:m-2 rounded-lg transition-all ease-out duration-300  active:scale-100">
      {children}
    </button>
  );
};

export default Button;
