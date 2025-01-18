import "./App.css";
import { Button, ColorRed } from "./components";
import { GlobalProvider } from "./Context/global.provider";

function App() {
  const handleClick = () => {
    console.log("clicking todo");
  };
  const dimeHola = () => {
    alert("Hola !!!!!");
  };

  return (
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={dimeHola}>My Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>My boton normal</Button>
    </GlobalProvider>
  );
}
export default App;

// batching
