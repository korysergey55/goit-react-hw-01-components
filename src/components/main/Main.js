import React from "react";

import Section from "../section/Section";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friendList/FriendList";
import TransactionHistory from "../tratsactionHistory/TransactionHistory";


import data from "../../data";

const Main = () => {
 return (
  <>
   <Section title="Profile-component">
    <Profile
     name={data.userData.name}
     tag={data.userData.tag}
     location={data.userData.location}
     avatar={data.userData.avatar}
     stats={data.userData.stats}
    />
   </Section>

   <Section title="Statistics-component">
    <Statistics stats={data.statisticData} title="Upload stats" />
   </Section>

   <Section title="FriendList-component">
    <FriendList friends={data.friendsData} />
   </Section>

   <Section title="Transaction-component">
    <TransactionHistory items={data.transactionData} />;
   </Section>
  </>
 );
};

export default Main;
