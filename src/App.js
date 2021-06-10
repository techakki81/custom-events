import logo from './logo.svg';
import './App.css';
import Form from './componets/Form'
import {useState,useEffect} from 'react'
import usePerson from  './usePerson'
function App() {

  const [person, setPerson] = useState({})
  usePerson()
  const raisedEvent= (e)=>{
    setPerson(person)
  }
  
  useEffect(() => {
    
    window.addEventListener("possibleSuspect", raisedEvent)
    
    return () => {
      window.removeEventListener("possibleSuspect",raisedEvent)
    }

  }, [])

  


  return (
    <div className="App">
      {
        person && 
        <div>
          <label>{person.first}</label>
          <label>{person.last}</label>
          <label>{person.picutre}</label>
        </div>
      }
      
    </div>
  );
}

export default App;
