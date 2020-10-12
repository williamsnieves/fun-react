import React, { useState } from 'react';
import { Icon, Modal, Label } from 'semantic-ui-react';
import { ItemContainer, ItenDetailContainer } from '../JobsItem';

const WishListModal = ({ amount, list, handleRemoveItemToWishList }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div
          style={{
            margin: '0.2rem 0 0 1rem',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Icon name="star" size="big"></Icon>
          <Label color="teal" floating size="small" circular>
            {amount}
          </Label>
        </div>
      }
    >
      <Modal.Header style={{ textAlign: 'center' }}>My wishlist</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div>
            {list.map((element) => (
              <ItemContainer>
                <ItenDetailContainer>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>{element.title}</p>
                    <a href={element.company_url} target="_blank">
                      Company site
                    </a>
                  </div>
                  <Icon
                    name="close"
                    size="massive"
                    style={{ color: '#757575', cursor: 'pointer' }}
                    onClick={() => handleRemoveItemToWishList(element.id)}
                  />
                </ItenDetailContainer>
              </ItemContainer>
            ))}
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default WishListModal;
