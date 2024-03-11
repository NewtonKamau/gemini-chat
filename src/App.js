import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setEror] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const surpriseOptions = [
    "Who won the latest nobel peace prize?",
    "What is the best programming language?",
    "Is Gemini better than chatgpt",
    "Will AI replace developers?"

  ]
  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  }
  const getResponse = async () => { 
    if(!value) {
      setEror("Please ask a question");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch('http://localhost:8000/gemini', options)
      const data = await response.text();
      console.log(data);
      
    } catch (error) {
      setEror(error.message);
      return;
    }
  }
   return (
    <div className="app">
        <p>What do you want to know</p>
        <button className="surprise" onClick={surprise} disabled={!chatHistory}>Surprise me </button>
        <div className="input-container">
          <input value={value} placeholder="When is Christmas?"
           onChange={ (e)=>setValue(e.target.value) }
         />
          {!error && <button onClick={getResponse}>Ask me</button>}
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
