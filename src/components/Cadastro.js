import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

  
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    
    console.log('Cadastrando:', { email, password });

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Usuário cadastrado com sucesso!');

    
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/login">Já tem uma conta? Faça login</Link>
    </div>
  );
};

export default Cadastro;
