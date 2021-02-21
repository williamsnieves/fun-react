import React, { useEffect, useState } from 'react';
import JobsItem from './JobsItem';
import {useJobs} from './hooks/useJobs'
import WishListModal from './modals/WishListModal';
import styled from '@emotion/styled';

const Jobs = () => {
  const [wishList, setWishList] = useState([]);
  const jobsUrl = 'http://localhost:3000/api/jobs';
  const {jobs} = useJobs(jobsUrl)

  const onAddWishListItem = (data) => {
    setWishList((prevWishList) => [...prevWishList, data]);
  };

  const onRemoveWishListItem = (id) => {
    setWishList((prevWishList) =>
      prevWishList.filter((list) => list.id !== id)
    );
  };

  const onRemoveWishListItems = () => {
    setWishList([]);
  }

  const Button = styled.button`
    color: turquoise;
  `;

  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '2em 2em 1em 2em',
          alignItems: 'center',
          color: '#757575',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '60px' }}>List of jobs</h1>
        <WishListModal
          amount={wishList.length}
          list={wishList}
          handleRemoveItemToWishList={onRemoveWishListItem}
          handleRemoveaAllItemsToWishList={onRemoveWishListItems}
        />
      </div>
      <div
        style={{
          borderBottom: '1px solid #757575',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 calc(100vw - 75%) 2em calc(100vw - 75%)',
        }}
      ></div>
      <div>
        {jobs.map((job) => (
          <JobsItem
            key={job.id}
            {...job}
            wishList={wishList}
            handleAddItemToWishList={onAddWishListItem}
          ></JobsItem>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
