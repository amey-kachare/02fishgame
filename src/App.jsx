import { useEffect, useState } from "react";
import "./App.css";

function App() {
    let [counter, setCounter] = useState(0);
    const [element, setElement] = useState([]);

    // Add function 
    const addNo = () => {
        setCounter((counter) => counter + 1); //Used call back feature in useState instead of manually incrementing
    };

    //Remove Function
    const removeNo = () => {
        if(counter>0)
            setCounter((counter) => counter - 1);
    };

    useEffect(() => {
        setElement([]);
        const newElements = [];
        for (let i = 0; i < counter; i++) {
            const style = {
                color: i % 2 === 0 ? "rgb(238, 76, 51)" : "rgb(49, 179, 255)", // Alternate colors for even and odd indices
                fontSize: `${25 - counter * 4}px`, // Increase font size for each element
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
        setElement(newElements);
    }, [counter]);

    return (
        <>
            <div>
                <ul>
                    {element.map((element) => (
                        // Apply the style inline using the style object
                        <div style={element.style}>{element.tags}</div>
                    ))}
                </ul>
            </div>

            <button onClick={addNo}>Add Fish</button>
            <button onClick={removeNo}>Remove Fish</button>
        </>
    );
}

export default App;
