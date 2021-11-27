import React from 'react';
import ProfilePic from '../../assets/pic.jpeg';
const TitleHeader = () => {
    return(
      <>
        <h1>
          Title Header
        </h1>
        <img src={ProfilePic} alt="profile" />
      </>
    );
};

export default TitleHeader;