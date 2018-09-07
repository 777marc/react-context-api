import React from 'react';
import UserContext from '../_context/UserContext';
import UserAvatar from './UserAvatar';

const UserStats = () => (
    <UserContext.Consumer>
      {user => (
        <div className="user-stats">
          <div>
            <UserAvatar user={user} />
            {user.name}
          </div>
          <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );

  export default UserStats;
  