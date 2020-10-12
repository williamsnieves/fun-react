import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';

const WishListModal = ({ amount, list, handleRemoveItemToWishList }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div style={{ margin: '0.2rem 0 0 1rem' }}>
          <Icon name="star" size="big"></Icon>
        </div>
      }
    >
      <Modal.Header>Modal wishlist</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <ul>
            {list.map((element) => (
              <li>
                {element.title}
                <span onClick={() => handleRemoveItemToWishList(element.id)}>
                  x
                </span>
              </li>
            ))}
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default WishListModal;
