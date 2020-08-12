import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import "./styles.css";
import HistoryCards from "./HistoryCards/HistoryCards";
import HistoryLayout from "./Layout/HistoryLayout";

const App = () => {
  const [openedModal, setOpenedModal] = useState(false);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const getHistories = async () => {
      const snapshot = await firestore.collection("histories").get();

      const historiesData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setHistories(historiesData);
    };

    getHistories();
  }, []);

  const animModal = openedModal ? "scale-in-center" : "scale-out-center";

  const handleClose = () => {
    setOpenedModal(false);
  };

  const handleCreateHistory = async (history) => {
    const docRef = await firestore.collection("histories").add(history);
    const doc = await docRef.get();
    const newHistory = { id: doc.id, ...doc.data() };
    setHistories([newHistory, ...histories]);
    handleClose();
  };

  return (
    <>
      {openedModal && (
        <HistoryLayout
          handleClose={handleClose}
          handleCreateHistory={handleCreateHistory}
          animModal={animModal}
        />
      )}
      {!openedModal && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HistoryCards {...{ histories }} />
          <button onClick={() => setOpenedModal(!openedModal)}>create</button>
        </div>
      )}
    </>
  );
};

export default App;
