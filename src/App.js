import "./App.css";
import LogoComponent from "./Components/LogoComponent.jsx";
import AuthorizationComponent from "./Components/AuthorizationComponent";
import SearchFieldComponent from "./Components/SearchFieldComponent";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <>
      <div className="header">
        <LogoComponent />
        <SearchFieldComponent />
        <AuthorizationComponent />
      </div>
      <MainComponent className="main" />
    </>
  );
}

export default App;
