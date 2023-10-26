import { useMycontext } from "./context/context";



function App() {
  const context=useMycontext();

  const handleclick=()=>{
    const a=10;
    const b=12;
    context.myadder(a,b);
  }
  return (
    <div className="App">
     <h1>hello</h1>
     <button onClick={()=>handleclick()}>add</button>
    </div>
  );
}

export default App;
