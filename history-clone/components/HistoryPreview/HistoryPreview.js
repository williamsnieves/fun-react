import React from "react";
import "./preview.css";
import img2 from "../../assets/img2.png";

const HistoryPreview = ({
  handleImage,
  handleText,
  imageHistory,
  textHistory,
  color,
  description,
  imageLocalUrl,
}) => {
  const previewImageStyle =
    imageLocalUrl !== ""
      ? { position: "relative" }
      : { position: "relative", backgroundColor: "#167fea" };

  return (
    <>
      <div className="preview-container">
        {imageHistory || (!textHistory && !imageHistory) ? (
          <div
            className="preview-item"
            onClick={handleImage}
            style={previewImageStyle}
          >
            <img
              src={imageLocalUrl}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
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
