import Button from "./components/Button/Button";
import MenuButton from "./components/MenuButton/MenuButton";

function App() {
  return (
    <div>
      <Button type="outlined">Signup</Button>
      <Button type="primary">Login</Button>
      <MenuButton />
    </div>
  );
}

export default App;
