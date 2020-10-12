import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
  background: #efebe9;
  border: 1px solid #bdb9b7;
  margin: 1em 0 1em 0;
  padding: 2em 1em 2em 2em;
`;

const ItemLogo = styled.div`
  align-self: center;
`;

const ItemDetail = styled.div`
  margin-left: 5rem;
  & > h1 {
    font-size: calc(2rem * 1.33);
    color: #757575;
  }
  & > h1,
  h3 {
    margin: 0;
  }
  & > h3 {
    margin-bottom: 1em;
    color: #757575;
  }
  & > p {
    margin: 0 0 0.5em 0;
    color: #757575;
  }
`;

export const ItenDetailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const JobsItem = ({
  id,
  title,
  company,
  location,
  type,
  company_logo,
  created_at,
  company_url,
  handleAddItemToWishList,
}) => {
  const saveElementToWishList = () => {
    const jobData = {
      id,
      title,
      company,
      location,
      type,
      company_logo,
      created_at,
      company_url,
    };
    handleAddItemToWishList(jobData);
  };
  return (
    <React.Fragment>
      <ItemContainer>
        <ItemLogo>
          <img src={company_logo} width="200" alt="" />
        </ItemLogo>
        <ItenDetailContainer>
          <ItemDetail>
            <h1>{company}</h1>
            <h3>{title}</h3>
            <p>{location}</p>
            <p>{type}</p>
            <p>{created_at}</p>
            <a href={company_url} target="_blank">
              Company site
            </a>
          </ItemDetail>
          <i className="plus circle"></i>
          <Icon
            name="plus circle"
            size="massive"
            style={{ color: '#757575', cursor: 'pointer' }}
            onClick={saveElementToWishList}
          />
        </ItenDetailContainer>
      </ItemContainer>
    </React.Fragment>
  );
};

JobsItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default JobsItem;
