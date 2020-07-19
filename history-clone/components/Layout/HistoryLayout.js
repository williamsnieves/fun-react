import React, { useState } from "react";
import HistoryPreview from "../HistoryPreview/HistoryPreview";
import HistoryEdit from "../HistoryEdit/HistoryEdit";
import { firestore } from "../../firebase";
import "./layout.css";

const HistoryLayout = ({ handleClose, handleCreateHistory, animModal }) => {
  const [imageHistory, setImageHistory] = useState(false);
  const [textHistory, setTextHistory] = useState(false);
  const [color, setColor] = useState(null);
  const [description, setDescription] = useState("");

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

  const handleDataToCreateHistory = (e) => {
    e.preventDefault();
    const history = {
      color,
      description,
    };

    handleCreateHistory(history);
  };

  const isDisabled = !color || description === "";

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
            {...{ imageHistory, textHistory, description, isDisabled }}
          />
        </div>
        <div className="layout-preview">
          <HistoryPreview
            handleImage={handleImage}
            handleText={handleText}
            {...{ color, imageHistory, textHistory, description }}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryLayout;
