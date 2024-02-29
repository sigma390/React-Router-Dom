
import  { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

export const url = 'https://api.github.com/users/sigma390'

interface GitHubData {
    followers?: number; // Define followers as optional since it may not exist initially
    avatar_url?: string; // Define avatar_url as optional as well
    // Add other properties as needed
  }



export const Github = () => {
   
   // Assuming data is an object
   //=======================> 1st Method Unoptimised <=======================
    // const [followersCount, setFollowersCount] = useState(0); // Initialize followers count to 0
    // const [avtarUrl, setAvUrl] = useState('');
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(url);
       
    //       // Extract followers count from the response and update state
    //       setFollowersCount(response.data.followers);
    //       setAvUrl(response.data.avatar_url);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData(); // Call the fetchData function when the component mounts
    // }, []); // Empty dependency array ensures useEffect runs only once when component mounts
  


    //========================> 2nd Method UseLoader HOOK<========================

    const data = useLoaderData() as GitHubData;
    const [followersCount, setFollowersCount] = useState<number | undefined>(0); // Initialize followers count to 0
    useEffect(() => {
        // Set followers count from the data
        if (data && data.followers !== undefined) {
            setFollowersCount(data.followers);
        }
    }, [data]); // Update followers count whenever data changes
  
  
  
    return (
    <div className='text-center
     m-4 bg-black
      text-white text-3xl'>Github Followers: <span className=' text-purple-500 glow'>{followersCount}</span>
      <img className='h-56 w-56 rounded-full' src={data.avatar_url} alt="" /></div>
  )
}



export const githubLoader = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
 };
 