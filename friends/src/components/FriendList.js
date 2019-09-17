import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard.js';

class FriendList extends React.Component {
  state = {
    friendList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
      axiosWithAuth()
        .get('/friends')
        .then(res => {
          // console.log(res);
          this.setState({friendList: res.data});
        })
        .catch(err => console.log(err))
    };

    render() {
      return (
        <div>
          <h1>Lambda School Friend List</h1>
          <div>
              {this.state.friendList.map(friend => <FriendCard key={friend.id} friend={friend} />)}
          </div>
        </div>
      )
    }
}

export default FriendList;
