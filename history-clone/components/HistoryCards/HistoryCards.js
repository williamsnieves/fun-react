import React from "react";
import HistoryImageCard from "../HistoryImageCard/HistoryImageCard";
import HistoryTextCard from "../HistoryTextCard/HistoryTextCard";

const HistoryCards = ({ histories }) => {
  return histories.length > 0 ? (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "row" }}>
      {histories.map((history) => {
        return history.isImage ? (
          <HistoryImageCard
            key={history.id}
            description={history.description}
            image={history.file}
          />
        ) : (
          <HistoryTextCard
            key={history.id}
            description={history.description}
            color={history.color}
          />
        );
      })}
    </ul>
  ) : (
    <div>loading...</div>
  );
};

export default HistoryCards;
