import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [Excuse, setExcuse] = useState(null);
  const gexcuse = (props) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${props}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div className="App">
      <h1> Generate an Excuse</h1>
      <button onClick={() => gexcuse("party")}>Party</button>
      <button onClick={() => gexcuse("family")}>Family</button>
      <button onClick={() => gexcuse("office")}>Office</button>
      <p>{Excuse}</p>
    </div>
  );
}

export default App;
