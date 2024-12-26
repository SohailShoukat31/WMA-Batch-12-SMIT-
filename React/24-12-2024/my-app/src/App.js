import Hi from "./hi";
import Greet from "./components/Greet/greet";
import "./App.css";

function App() {
  return (
    <div>
      <Hi />
      <Greet name="Sohail" />
      <br />
      <Greet name="Zain" />
    </div>
  );
}

export default App;
