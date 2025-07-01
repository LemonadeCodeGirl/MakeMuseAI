import Message from "./message";
import { useEffect, useState } from 'react';
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ApiTest from "./components/ApiTest";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/greet')
      .then(res => res.json())
      .then(data => setGreeting(data.message));
  }, []);

  let thing = "hello";
  return (
    <div className="App">
      <Alert>
        Hello <span></span>there
      </Alert>

      <ListGroup
        items={["New York", "Miami", "Tokyo", "London", "Paris"]}
        heading={"Citiess"}
        onSelectItem={handleSelectItem}
      />

      <ApiTest />
    </div>
  );
}

export default App;
