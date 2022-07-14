import { render } from "react-dom";
import "./stylesheets/style.scss";

function App() {
  return (
    <div>
      Preview Gabrielle Essence Eau De Parfum A floral, solar and voluptuous
      interpretation composed by Olivier Polge, Perfumer-Creator for the House
      of CHANEL. $149.99 $169.99 Add to Cart
    </div>
  );
}

render(<App />, document.getElementById("root"));
