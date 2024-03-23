import React from 'react';
// import axios from 'axios';

import CustomNav from "./widgets/CustomNav.jsx";

const HomePage = () => {
    
    return (
      <div>
        <CustomNav/>
      </div>
    )
}

export default HomePage;

// const fetchData = async () => {
    //     try{
    //         const response = await axios.get('api');
    //         console.log(response.data);
    //         console.log(response.status);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
  
    // fetchData();