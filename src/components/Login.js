import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      
      navigate('/dashboard');
    } else {
  
      alert('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="off"
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
    </div>
  );
};

export default Login;
