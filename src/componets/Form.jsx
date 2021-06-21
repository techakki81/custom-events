import React from 'react'
import "../App.css"


export default function Form() {
    const handleChange =(e)=>{   
        //step1
        //const event = new CustomEvent('formEventRaised', { detail: e.target.value });

        //step 2. the detail is a custom object
        const event = new CustomEvent( 'formEventRaised', 
        {
            detail:{
                value:e.target.value,
                timeStamp:{ 
                 day:"Monday",
                 month:1,
                 year:1981
                }
            }
        }
        )


        dispatchEvent(event)
    }
    return (
        <div>
            <form className="flex">
                <div>
                    <input type="text" onBlur={handleChange} placeholder="text"></input>
                </div>
                <div>
                    <input type="email" onBlur={handleChange} placeholder="email"></input>
                </div>
            </form>
        </div>
    )
}
