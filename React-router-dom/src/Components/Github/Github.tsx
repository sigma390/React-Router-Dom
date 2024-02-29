import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/sigma390'



export const Github = () => {
   
   // Assuming data is an object
    const [followersCount, setFollowersCount] = useState(0); // Initialize followers count to 0
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
       
          // Extract followers count from the response and update state
          setFollowersCount(response.data.followers);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array ensures useEffect runs only once when component mounts
  return (
    <div className='text-center
     m-4 bg-gray-600
      text-white'>Github Followers:{followersCount}</div>
  )
}
