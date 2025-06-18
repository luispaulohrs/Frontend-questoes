import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./Login";
import Questoes from "./Questoes";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      {user ? (
        <>
          <p>Bem-vindo, {user.email}!</p>
          <button onClick={() => signOut(auth)}>Sair</button>
          <Questoes />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;