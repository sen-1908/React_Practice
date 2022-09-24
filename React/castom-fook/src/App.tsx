import axios from 'axios';
import React, { useState } from 'react';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { UserProfile } from './types/userProfile';

function App() {
  const [userProfiles,setUserProfiles] = useState<Array<UserProfile>>([]);
  
  const onClickGetData = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id ,
        name: `${user.name}(${user.username})`,
        email: user.email ,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data)
    })
  }

  return (
    <div className="App">
      <button onClick={onClickGetData} >データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
