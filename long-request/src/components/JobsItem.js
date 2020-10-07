import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const JobsItem = ({
  title,
  company,
  location,
  type,
  handleAddItemToWishList,
}) => {
  const saveElementToWishList = () => {
    const jobData = {
      title,
      company,
      location,
      type,
    };
    handleAddItemToWishList(jobData);
  };
  return (
    <React.Fragment>
      <div>
        <h1>{company}</h1>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{type}</p>
      </div>
      <Button onClick={saveElementToWishList}>add to wishlist</Button>
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
