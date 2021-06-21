import React,{useEffect} from 'react'

export default function usePerson() {

    let interval ;
    useEffect(() => { 
       
        interval = setInterval(() => {
            fetch("https://randomuser.me/api/")
            .then(r=>r.json())
            .then (results=>{console.log(results); return results.results[0]})
            .then(( result )=>{
              if( result.name.first.toUpperCase().startsWith("A"))
              {
                const event = new CustomEvent( 'possibleSuspect', 
                {
                    detail:{
                        first:result.name.first,
                        last:result.name.last,
                        picture: result.picture.large
                    }
                }
                )
                dispatchEvent(event)
              }
        })            
        }, 
        2000);
        
    return ()=>{
        clearInterval(interval);
     }

    },[])    
}