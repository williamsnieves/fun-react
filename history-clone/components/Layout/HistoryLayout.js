import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HistoryPreview from "../HistoryPreview/HistoryPreview";
import HistoryEdit from "../HistoryEdit/HistoryEdit";
import { storage } from "../../firebase";
import "./layout.css";

const HistoryLayout = ({ handleClose, handleCreateHistory, animModal }) => {
  const [imageHistory, setImageHistory] = useState(false);
  const [textHistory, setTextHistory] = useState(false);
  const [color, setColor] = useState(null);
  const [description, setDescription] = useState("");
  const [imageRef, setImageRef] = useState(null);
  const [imageLocalUrl, setImageLocalUrl] = useState("");

  const handleImage = () => {
    setImageHistory(!imageHistory);
  };

  const handleText = () => {
    setTextHistory(!textHistory);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDataToCreateHistory = async (e) => {
    e.preventDefault();
    let history = { description, isImage: false };

    if (imageRef && imageHistory) {
      const fileStoraged = storage
        .ref()
        .child("history-clone")
        .child(uuidv4())
        .child(imageRef.name)
        .put(imageRef)
        .then((response) => response.ref.getDownloadURL());

      const fileUrlWait = await fileStoraged;
      history = { ...history, file: fileUrlWait, isImage: true };
    } else {
      history = { ...history, color };
    }

    handleCreateHistory(history);
  };

  const isDisabled =
    !color || description === "" || (!imageRef && description === "" && !color);

  return (
    <div className={`layout-wrapper ${animModal}`}>
      <span onClick={handleClose} className="close-modal">
        X
      </span>
      <div className="layout-content">
        <div className="layout-edit">
          <HistoryEdit
            handleColor={handleColor}
            handleDescription={handleDescription}
            handleCreateHistory={handleDataToCreateHistory}
            {...{
              imageHistory,
              textHistory,
              description,
              isDisabled,
              setImageRef,
              setImageLocalUrl,
            }}
          />
        </div>
        <div className="layout-preview">
          <HistoryPreview
            handleImage={handleImage}
            handleText={handleText}
            {...{
              color,
              imageHistory,
              textHistory,
              description,
              imageLocalUrl,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryLayout;
