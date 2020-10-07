import React, { useEffect, useState } from "react";
import JobsItem from "./JobsItem";
import WishListModal from "./modals/WishListModal";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [wishList, setWishList] = useState([]);
  const jobsUrl = "http://localhost:3000/api/jobs";
  useEffect(() => {
    const getJobsData = async () => {
      const githubJobs = await fetch(jobsUrl);
      const results = await githubJobs.json();
      setJobs(results);
    };

    getJobsData();
  }, []);

  const onAddWishListItem = (data) => {
    setWishList((prevWishList) => [...prevWishList, data]);
  };

  console.log("wishList---", wishList);

  return (
    <div>
      <h1>List of jobs</h1>
      <WishListModal amount={wishList.length} list={wishList} />
      <div>
        {jobs.map((job) => (
          <JobsItem
            key={job.id}
            {...job}
            handleAddItemToWishList={onAddWishListItem}
          ></JobsItem>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
