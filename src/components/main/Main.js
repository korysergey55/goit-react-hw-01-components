import React from "react";

import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friendList/FriendList";
import TransactionHistory from "../tratsactionHistory/TransactionHistory";
import Section from "../section/Section";

import data from "../../data";

const Main = () => {
 return (
  <>
   <Section title="Profile-component">
    <Profile props={data.userData} />
   </Section>
   <Section title="Statistics-component">
    <Statistics statistika={data.statisticData} title="Upload stats" />
   </Section>
   <Section title="FriendList-component">
    <FriendList friends={data.friendsData} />
   </Section>
   <Section title="Transaction-component">
    <TransactionHistory transactions={data.transactionData} />;
   </Section>
  </>
 );
};

export default Main;
