import React from "react";

const HistoryTextCard = ({ description, color }) => {
  return (
    <li
      style={{
        width: "112px",
        height: "198px",
        boxShadow: "1px 1px 1px #ccc",
        border: "1px solid #eee",
        borderRadius: "10%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {description}
    </li>
  );
};

export default HistoryTextCard;
