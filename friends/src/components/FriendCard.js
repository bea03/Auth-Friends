import React from "react";

const FriendCard = ({ friend }) => {
    console.log('Card: ', friend);
  return (
    <div className='friend-card'>
      <div className='content-card'>
          <img src='../../public/img/antique-art-cartoon.jpg' alt='Friend Picture' />
          <h2>Meet {friend.name}</h2>
          <h3>AGE: {friend.age}</h3>
          <h3>EMAIL: {friend.email}</h3>
      </div>
    </div>
  );
};

export default FriendCard;
