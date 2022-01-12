import './App.css';
// import jsondata from "./user.json"
// import { makeUpperCase } from './utilities';
import {useState} from "react"
function App() {
  const [state, setstate] = useState(null);

  const onLoad = () =>{
    import("./user.json").then((module)=> setstate(module.default));
    import("./utilities" /* webpackChunkName: "utilities"*/).then(({makeUpperCase})=> setstate((value) =>makeUpperCase(value)))
  }
  return (
    <div className="App">
      <header className="App-header">
      HOME App
      <button onClick={onLoad}>Load</button>
      <p>{JSON.stringify(state)}</p>
      </header>
    </div>
  );
}

export default App;
