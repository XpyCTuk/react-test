import "./App.css";
import MainComponent from "./Components/MainComponent";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent className="main" />
    </>
  );
}

export default App;
