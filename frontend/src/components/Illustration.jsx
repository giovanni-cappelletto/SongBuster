import { FastAverageColor } from "fast-average-color";
import { useState } from "react";

const Illustration = ({ url, title }) => {
  const [hex, setHex] = useState("#db2626");

  new FastAverageColor()
    .getColorAsync(url, {
      ignoredColor: [0, 0, 0],
      algorithm: "sqrt", // It can be "sqrt" | "dominant" | "simple"
    })
    .then((data) => {
      setHex(data.hex);
    });

  return (
    <div className="cover_container">
      <div className="cover_background">
        <img src={url} alt={`${title}'s cover`} className="cover" />
      </div>

      <svg viewBox="0 0 100 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          y="0.491638"
          width="92.148"
          height="92.148"
          rx="46.074"
          fill="black"
        />
        <rect
          x="30.716"
          y="31.9568"
          width="29.9668"
          height="29.9668"
          rx="14.9834"
          fill={hex}
        />
        <rect
          x="42.7027"
          y="43.9436"
          width="5.99337"
          height="5.99337"
          rx="2.99668"
          fill="white"
        />
        <rect
          className="circle"
          x="2.74744"
          y="3.2392"
          width="86.653"
          height="86.653"
          rx="43.3265"
          stroke="#313131"
        />
        <rect
          className="circle"
          x="4.995"
          y="5.48669"
          width="82.158"
          height="82.158"
          rx="41.079"
          stroke="#A6A6A6"
        />
        <rect
          className="circle"
          x="7.24255"
          y="7.73419"
          width="77.6629"
          height="77.6629"
          rx="38.8315"
          stroke="#535353"
        />
      </svg>
    </div>
  );
};

export default Illustration;
