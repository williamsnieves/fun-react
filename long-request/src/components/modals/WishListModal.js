import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

const WishListModal = ({ amount, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div>whishlist ({amount})</div>}
    >
      <Modal.Header>Modal wishlist</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <ul>
            {list.map((element) => (
              <li>{element.title}</li>
            ))}
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default WishListModal;
