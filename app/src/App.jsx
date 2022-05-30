import Scene from "./components/Scene";
import Cube from "./components/Models/Cube";
import Shoe from "./components/Models/Shoe";
import Plane from "./components/Models/Plane";
import AppRoutes from "./routes";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
