
import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {
    const [friend, setFriend] = useState({
      friend: "",
      age: "",
      email: ""
    });

    const addFriend = friend => {
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", friend)
        .catch(err => console.log(err.response));
    };

    const handleChange = event => {
      event.preventDefault();
     setFriend({ ...friend, [event.target.friend]: event.target.value });
    };

    const handleSubmit = event => {
      event.preventDefault();
      addFriend(event);
    }

      return (
      <div className='loginPage'>
        <form className='loginForm' onSubmit={handleSubmit}>
            <h1>Add Friends to Your List</h1>
            <input
                name="name"
                onChange={handleChange}
                value={friend.name}
                placeholder="Friend's Name"
                required
            />

            <input
                name="age"
                onChange={handleChange}
                value={friend.age}
                placeholder="Age"
                required
            />

            <input
                name="email"
                onChange={handleChange}
                value={friend.email}
                placeholder="Email"
                required
            />
            <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  };

export default AddFriend;
