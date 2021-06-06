import React from "react";
import userData from "./user.json";
import statisticData from "./statisticalData.json";
import friendsData from "./friends.json";
import Profile from './components/profile';
import Statistics from './components/statistics';
import FriendList from './components/friendList'

const App = () => {
    return (
        <div>
            <h1>Main App container sotial</h1>
            <h2>Profile-component</h2>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
                followers={userData.stats.followers}
                views={userData.stats.views}
                likes={userData.stats.likes}
            />

            <h2>Statistics-component</h2>

            <Statistics
                statistika={statisticData}
                title="Upload stats"
            />

            <h2>FriendList-component</h2>
            <FriendList friends={friendsData} />
        </div>
    )
};
export default App;