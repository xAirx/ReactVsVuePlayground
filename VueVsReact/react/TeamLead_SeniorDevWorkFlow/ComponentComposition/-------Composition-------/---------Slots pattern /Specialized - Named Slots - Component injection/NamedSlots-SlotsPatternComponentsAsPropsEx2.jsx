import React from "react";

import logo from "./logo.svg";
import "./App.css";

const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => <p className="fat">{user.biography}</p>;

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

const App = () => {
  const user = {
    name: "Robin Wieruch",
    biography: "Software Engineer ...",
    avatarUrl: logo,
  };

  return <User user={user} />;
};

export default App;
