import { useRef, useEffect} from 'react'
import './Style.css'
function Disco() {
  const square = useRef(null)

  useEffect(() => {

    setInterval(() => {
      square.current.className = 'red'
    }, 1000)

    setInterval(() => {
      square.current.className = 'blue'
    }, 2000)

  })

  return (
    <>
      <div ref={square}>
        <h1>DISCO!!!!!!</h1>
      </div>
    </>
  )
}
export default Disco
