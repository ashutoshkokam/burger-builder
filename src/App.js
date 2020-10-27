import "./App.css";
import Layout from "../src/components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
