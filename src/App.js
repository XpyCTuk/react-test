import "./App.css";
import LogoComponent from "./Components/LogoComponent.jsx";
import AuthorizationComponent from "./Components/AuthorizationComponent";
import SearchFieldComponent from "./Components/SearchFieldComponent";

function App() {
  return (
    <div className="header">
      <LogoComponent />
      <SearchFieldComponent />
      <AuthorizationComponent />
    </div>
  );
}

export default App;
