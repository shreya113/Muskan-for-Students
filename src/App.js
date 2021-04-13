import React from 'react';
import './App.css';
//import SubmissionSection from './SubmissionSection';
//import Report from './Report';
import Homepage from './Homepage';

function App() {
 //const [count, setCount] = useState(0);
 //below two statements in Appdiv in return
 //<SubmissionSection setCount={setCount} count={count}/>
 //<Report count={count}/> 
  return (
    <div className="App">
 <Homepage />
    </div>
  );
}

export default App;
