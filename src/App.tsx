import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClick={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Press!</Button>
    </>
  );
}

export default App;
