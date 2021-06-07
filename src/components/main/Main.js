import React from 'react';

import userData from '../../data/user.json';
import Profile from '../profile/profile';

import statisticData from "../../data/statisticalData.json";
import Statistics from "../statistics/statistics";

import friendsData from "../../data/friends.json";
import FriendList from "../friendList/friendList";

import transactionData from "../../data/transaction.json";
import TransactionHistory from "../tratsactionHistory/TransactionHistory";


const Main = () => {
    return (
     <main>
      <h2>Profile-component</h2>
      <Profile  props={userData}
    
      />
      <h2>Statistics-component</h2>
      <Statistics statistika={statisticData} title="Upload stats" />

      <h2>FriendList-component</h2>
      <FriendList friends={friendsData} />
      
      <h2>Transaction-component</h2>
      <TransactionHistory transactions={transactionData} />;
     </main>
    );
}

export default Main;