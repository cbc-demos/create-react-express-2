import React, { useState, useEffect } from 'react';
import { getUserById } from './utils/API';

const userIds = [1, 2]

const App = () => {
  const [selectState, setSelectState] = useState(userIds[0]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUserById(selectState).then(({ data }) => setCurrentUser(data));
  }, [selectState]);

  const handleSelectChange = ({ target }) => setSelectState(target.value);

  const renderUser = () => {
    const { username, email, id } = currentUser;
    return (
      <div>
        <h2>{username} Details</h2>
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Create React App Express Boilerplate</h1>
      <label>Select User</label>
      <br />
      <select value={selectState} onChange={handleSelectChange}>
        {userIds.map(id => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      {currentUser && renderUser()}
    </div>
  );
};

export default App;
