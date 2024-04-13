import { useEffect, useState } from 'react'
import './App.css'

function App() {

let [counter,setCounter]=useState(0)
const [element,setElement]=useState([])

  // let counter=1;
  const addNo=()=>{
    // counter=counter+1;
    console.log(counter)
    // counter++;
    // for (let index = 0; index < 4; index++) {
    //   setCounter(()=>counter+1)                  //dosent increase the count by 4 as task seems
                                                    //whenever done executed by fiber as it sent in bundle
                                                    //only one time it is incremented
    // }
    setCounter(counter+1) 
  }
  const removeNo=()=>{
    counter=counter-1;
    console.log(counter)
    setCounter(counter)
  }


  useEffect(()=>{
    setElement([])
    const newElements=[]
    for (let i = 0; i < counter; i++) {
      // Define the style object for each element
      const style = {
        color: i % 2 === 0 ? 'rgb(238, 76, 51)' :  'rgb(49, 179, 255)', // Alternate colors for even and odd indices
        fontSize: `${25 - counter*3}px`, // Increase font size for each element
        // text-shadow: '20 px',
        // textDecoration:'solid'
      };

      // Define the tags for each element
      const tags = (
        <div>
          <h2>{`${counter} Machli`}</h2>
          <h3>Pani Mein Gayi</h3>
          <h1>Chappak!!!</h1>
        </div>
      );

      // Push the element with the style object and tags into the newElements array
      newElements.push({ id: i + 1, style, tags });
    }
    setElement(newElements)


  },[counter])



  return (
    <>
    
      {/* <h1>{counter} Machli </h1>
      <h2>Pani mein gayi, CHAPPAK!!</h2> */}
      <div>
        
      <ul>
        {element.map((element) => (
          // Apply the style inline using the style object
          <div style={element.style}>
            {element.tags}
          </div>
        ))}
      </ul>
      </div>
    
        <button onClick={addNo}>Add Fish</button>
        <button onClick={removeNo}>Remove Fish</button>
    </>
  )
}

export default App
