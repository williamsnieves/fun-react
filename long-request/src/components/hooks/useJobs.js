import {useState, useEffect} from 'react'

export const useJobs = (url) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobsData = async () => {
      const githubJobs = await fetch(url);
      const results = await githubJobs.json();
      setJobs(results);
    };

    getJobsData();
  }, []);
  
  return {jobs}
}