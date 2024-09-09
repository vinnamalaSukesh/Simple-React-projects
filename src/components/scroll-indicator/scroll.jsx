import React, { useState, useEffect, useRef } from "react";
import "./scroll.css";

const Scroll = () => {
  const [data, setData] = useState(null);
  const [percent,setPercent] = useState(0)
  const scroll = useRef(null)
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const response = await res.json();
      setData(response.products);
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = () => {
    if(scroll.current){
    const scrollTop = scroll.current.scrollTop;
    const scrollHeight =
      scroll.current.scrollHeight - scroll.current.clientHeight;
    const height = (scrollTop / scrollHeight) * 100;
    setPercent(height);
    }
  };
  useEffect(() => {
    const scrollElement = scroll.current;
    if(scrollElement){
      scrollElement.addEventListener('scroll',handleScroll)
    }
    return ()=>{if(scrollElement){
      scrollElement.removeEventListener('scroll',handleScroll)
    }}
  }, []);

  return (
    <div id="full" ref={scroll}>
      <div id="unscrolled">
        <div id="scrolled" style={{width:`${percent}%`}}></div>
      </div>
      <button onClick={fetchData}>Fetch data</button>
      <div id="scroll">
        {data
          ? data.map((item, index) => <p key={index}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default Scroll;
