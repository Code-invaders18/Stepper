import React,{useState,useEffect} from "react";
import "./Slider.css";

export default function Slider() {
  const [value,onChange]=useState(1);

  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })

  return (
    <div className="slider-parent">
      <input type="range" min="1" max="500" value={value}
         onChange={({ target: { value: radius } }) => {
          console.log(radius)
                    onChange(radius);
                  }}
      />
      <div className="buble"> 
      {value}
      </div>
    </div>
  );
}
