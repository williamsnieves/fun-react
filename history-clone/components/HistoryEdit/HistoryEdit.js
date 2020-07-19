import React from "react";
import "./edit.css";

const colors = {
  red: "#f15b5b",
  blue: "#7adce6",
  green: "#8ad66a",
};
const HistoryEdit = ({
  handleColor,
  imageHistory,
  textHistory,
  description,
  handleDescription,
  handleCreateHistory,
  isDisabled,
}) => {
  const { red, blue, green } = colors;

  console.log("----", isDisabled);
  return (
    <>
      <div>
        <form className="history-edit-container" onSubmit={handleCreateHistory}>
          {imageHistory && (
            <>
              <label className="title-colors">Upload image</label>
              <input type="file" name="file" className="file-input"></input>
            </>
          )}
          {(imageHistory || textHistory) && (
            <>
              <label className="title-colors">Description</label>
              <textarea
                placeholder="Start writing"
                name="description"
                className="input-description"
                value={description}
                onChange={handleDescription}
              ></textarea>
            </>
          )}
          {textHistory && (
            <>
              <h4 className="title-colors">Colors</h4>
              <div className="colors-content">
                <div className="red" onClick={() => handleColor(red)}></div>
                <div className="blue" onClick={() => handleColor(blue)}></div>
                <div className="green" onClick={() => handleColor(green)}></div>
              </div>
            </>
          )}

          <button type="submit" className="generic-btn" disabled={isDisabled}>
            Create history
          </button>
        </form>
      </div>
    </>
  );
};

export default HistoryEdit;