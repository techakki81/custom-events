
import './App.css';
import Form from './componets/Form'
import {useState,useEffect} from 'react'
import usePerson from  './usePerson'
function App() {

  const [person, setPerson] = useState({})
  usePerson()

  const raisedEvent= (e)=>{
    setPerson(e.detail)
  }
  
  useEffect(() => {
    
    window.addEventListener("possibleSuspect", raisedEvent)
    
    return () => {
      window.removeEventListener("possibleSuspect",raisedEvent)
    }

  }, [])

  


  return (
    <div className="flex">
      
      {
        person && 
          <div className="flexStart">
          <h1> Found New Culprit !!!  </h1>
          <div>First Name: {person.first}</div>
          <div>Last Name: {person.last}</div>         
          <img src={person.picture} />
        </div>
      }
      
    </div>
  );
}

export default App;
