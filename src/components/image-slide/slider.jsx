import React, { useState, useEffect } from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './slider.css';
import i1 from './1.jpg';
import i2 from './2.jpg';
import i3 from './3.jpg';
import i4 from './4.jpg';
import i5 from './5.jpg';

function Slider() {
  const images = [i1, i2, i3, i4, i5];
  const [currInd, setCurrInd] = useState(0);

  function back() {
    setCurrInd(currInd === 0 ? images.length - 1 : currInd - 1);
  }

  function front() {
    setCurrInd(currInd === images.length - 1 ? 0 : currInd + 1);
  }

  return (
    <div className="images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={currInd === index ? "img show" : "img hide"}
        />
      ))}
      <ArrowBackIcon className="f-icon" onClick={back} />
      <ArrowForwardIcon className="b-icon" onClick={front} />
      <div className='buttons'>
        {[...Array(images.length)].map((_, index) => (
          <button
            key={index}
            className={currInd === index ? 'but white' : 'but black'}
            onClick={() => setCurrInd(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;