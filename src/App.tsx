import { useState, type SyntheticEvent } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    alert(
      `VOUS VOUS ETES FAIT AVOIR PAR PHISHING\nuser:${username}\npassword:${password}\n\nhacker: William Gijsen`,
    );
  };

  return (
    <>
      <div className="mainbox">
        <div className="login-box">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Drive_icon_%282026%29.svg/1280px-Google_Drive_icon_%282026%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
            style={{
              width: "64px",
            }}
          ></img>
          <h1 className="google-sans-css" style={{fontWeight : '500'}}>Connexion à Google Drive</h1>
          <form
            className="login-form"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            onSubmit={handleSubmit}
          >
            <input
              className="input-box google-sans-css"
              placeholder="Saisissez votre nom d'utilisateur"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              className="input-box google-sans-css"
              placeholder="Saisissez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <button className="btn google-sans-css" style={{fontWeight : '500'}}>Se connecter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
