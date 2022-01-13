import logo from './logo.svg';
import './App.css';
// import DefComponent from './MyComponents';
import loadable from "@loadable/component"

const DefComponent = loadable(()=> import("./MyComponents"))
function App() {
  return (
    <div className="App">
     <div>Product App</div>
     <DefComponent/>
    </div>
  );
}

export default App;
