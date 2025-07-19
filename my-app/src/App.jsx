import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";

function App() {
  return (
    <>
      <Counter start={10} name={"My Count"} />
      <Counter name={"Regular Count"} />
      <CounterClass />
      <CounterClass />
    </>
  );
}

export default App;
