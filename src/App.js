import { render } from "react-dom";
import "./stylesheets/style.scss";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Card></Card>
    </div>
  );
}

render(<App />, document.getElementById("root"));
