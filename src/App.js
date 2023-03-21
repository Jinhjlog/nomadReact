import {useState, useEffect} from "react";

function App() {
  const [showing, setShowing] = useState(false);

  function Hello() {
    useEffect(() => {
      console.log("hi :)")
      return () => console.log("bye :(")
    }, [])
    useEffect(() => {
      console.log("hi :)")
      return function() {
        console.log("bye :(")
      }
    }, [])

    return (<h1>Hello</h1>)
  }
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

/*

CleanUp function


























*/
