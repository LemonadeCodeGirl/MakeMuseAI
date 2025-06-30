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
        Hello <span></span>there
      </Alert>

      {/* <ListGroup
        items={["New York", "Miami", "Tokyo", "London", "Paris"]}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
