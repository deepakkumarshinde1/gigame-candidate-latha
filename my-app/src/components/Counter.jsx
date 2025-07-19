import { useState } from "react";

export default function Counter(props) {
  let { name = "Count", start = 0 } = props;
  let [count, setCount] = useState(start); // 1,a,true,[],{},null
  let inc = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>
        {name} : {count} <button onClick={inc}>Inc</button>
      </h1>
    </>
  );
}

// export default Counter;
// hooks => function in react to perform a complex logic .
// each hooks start with "use"
// useState => [state,funToUpdateState]
