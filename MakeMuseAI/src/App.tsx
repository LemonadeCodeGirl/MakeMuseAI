import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let thing = "hello";
  return (
    <div className="App">
      <Alert>
        Helloss <span></span>there
      </Alert>

      <ListGroup
        items={["New York", "Miami", "Tokyo", "London", "Paris"]}
        heading={"Citiess"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
