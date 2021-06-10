import React,{useEffect} from 'react'

export default function usePerson() {

   
    useEffect(() => {
       
        while(true){
        fetch("https://randomuser.me/api/").
        then(r=>r.json()).
        then(( results )=>{
              if( results.name.first.startsWith("R"))
              {
                const event = new CustomEvent( 'possibleSuspect', 
                {
                    detail:{
                        first:result.name.first,
                        last:result.name.last,
                        picture: results.picture.large
                    }
                }
                )
                dispatchEvent(event)
              }
        })
    }

    },[])


    return (
        <div>
            
        </div>
    )
}
