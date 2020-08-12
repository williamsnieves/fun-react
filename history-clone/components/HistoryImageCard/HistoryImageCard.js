import React from "react";
import img2 from "../../assets/img2.png";

const HistoryImageCard = ({ description, color, image }) => {
  return (
    <li
      style={{
        width: "112px",
        height: "198px",
        boxShadow: "1px 1px 1px #ccc",
        border: "1px solid #eee",
        borderRadius: "10%",
        marginRight: "0.5em",
        fontSize: "1.3em",
        position: "relative",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          objectFit: "cover",
          width: "112px",
          height: "198px",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          borderRadius: "10%",
        }}
      />
      <div
        style={{
          zIndex: "1",
          bottom: "0",
          color: "white",
        }}
      >
        <img
          src={img2}
          style={{
            zIndex: "1",
            top: "0",
            left: "0",
            margin: "0.5em 0 0 0.5em",
            position: "absolute",
            color: "white",
            width: "40px",
            height: "40px",
            border: "2px solid #2e89ff",
            borderRadius: "100%",
          }}
        />
      </div>
      <span
        style={{
          zIndex: "1",
          bottom: "0",
          position: "absolute",
          color: "white",
          margin: "0 0 0.5em 0.5em",
        }}
      >
        willians nieves
      </span>
    </li>
  );
};

export default HistoryImageCard;
