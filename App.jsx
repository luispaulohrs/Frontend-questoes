
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './index.css';
import './firebase';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modo, setModo] = useState('login');

  const auth = getAuth();

  const entrar = async () => {
    try {
      if (modo === 'login') {
        await signInWithEmailAndPassword(auth, email, senha);
        alert('Login realizado com sucesso!');
      } else {
        await createUserWithEmailAndPassword(auth, email, senha);
        alert('Cadastro realizado com sucesso!');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Olá, Zeca tá online!</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
      <br />
      <button onClick={entrar}>{modo === 'login' ? 'Entrar' : 'Cadastrar'}</button>
      <br />
      <button onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')}>
        Trocar para {modo === 'login' ? 'Cadastro' : 'Login'}
      </button>
    </div>
  );
}
