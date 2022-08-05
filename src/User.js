import React, { useEffect, useState } from 'react';

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <UserItem {...item} />
      ))}
    </div>
  );
}

function UserItem({ name, username, email, phone }) {
  return (
    <div className='user'>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  );
}

export default User;
