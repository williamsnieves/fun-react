import React from "react";
import "./preview.css";

const HistoryPreview = ({
  handleImage,
  handleText,
  imageHistory,
  textHistory,
  color,
  description,
}) => {
  return (
    <>
      <div className="preview-container">
        {imageHistory || (!textHistory && !imageHistory) ? (
          <div className="preview-item" onClick={handleImage}>
            <span>image history</span>
          </div>
        ) : null}

        {textHistory || (!textHistory && !imageHistory) ? (
          <div
            className="preview-item"
            style={{ background: color }}
            onClick={handleText}
          >
            <span>{description || "Text description"}</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HistoryPreview;
