import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setEror] = useState("");
  const surpriseOptions = [
    "Who won the latest nobel peace prize?",
    "What is the best programming language?",
    "Is Gemini better than chatgpt",
    "Will AI replace developers?"

  ]
   return (
    <div className="app">
        <p>What do you want to know</p>
        <button className='surprise'>Surprise me </button>
        <div className="input-container">
          <input value={''} placeholder="When is Christmas?"
          onChange={""}/>
          {!error && <button>Ask me</button>}
          {error && <button>Clear</button>}
         </div>
         {error && <p>{error}</p>}
         <div className="search-result">
           <div key={""}>
             <p className="answer"></p>
           </div>
         </div>     
    </div>
  );
}

export default App;
