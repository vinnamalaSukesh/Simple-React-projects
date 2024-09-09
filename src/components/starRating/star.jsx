import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star.css";

const Star = () => {
  const [no, setNo] = useState(-1);
  const [hover, setHover] = useState(-1);

  function click(ind) {
    setNo(ind);
  }

  function Hover(ind) {
    setHover(ind);
  }

  return (
    <>
      {[...Array(10)].map((_, index) => (
        <FaStar
          key={index}
          size={40}
          onClick={() => click(index)}
          onMouseOver={() => Hover(index)}
          onMouseLeave={() => Hover(-1)}
          className={
            (hover >= no && index <= hover) ||
            (hover <= no && index <= hover) ||
            (hover === -1 && index <= no)
              ? "yellow"
              : "black"
          }
        />
      ))}
    </>
  );
};

export default Star;
