import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, senha);
      } else {
        await createUserWithEmailAndPassword(auth, email, senha);
      }
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Entrar" : "Criar conta"}</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
      <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", marginTop: "1rem" }}>
        {isLogin ? "Criar uma conta" : "Já tenho conta"}
      </p>
    </form>
  );
}

export default Login;