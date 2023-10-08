import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


function useMouse(){
  const [mousePosition,setMousePosition] = useState({
    x:null,
    y:null
  })

  useEffect(()=>{
    function handle(e){
      setMousePosition({
        x:e.pageX,
        y:e.pageY
      })
    }
    document.addEventListener("mousemove",handle)
    return ()=> document.removeEventListener("mousemove",handle)

  })
  
  return mousePosition

}

function App() {
  const {x,y} = useMouse();
  return (
    <div>
      <h2>Mouse Position Tracking</h2>
      <p>Mouse X is {x}</p>
      <p>Mouse Y is {y}</p>
    </div>
  )
}

export default App