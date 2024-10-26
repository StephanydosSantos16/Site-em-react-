import React from 'react';

const UserPage = () => {
  const user = localStorage.getItem('user');

  return (
    <div className="container">
      <h2>Página do Usuário</h2>
      <p>Usuário logado: {user}</p>
    </div>
  );
};

export default UserPage;
