import { useState, useEffect } from 'react'

const StoryBook = () => {
  const [state, setState] = useState([1, 2, 3])

  useEffect(() => {
    setTimeout(() => {
      setState(null)
    }, 3000)
  }, [])
  return (
    <div>
      {state.map(st => (
        <>{st}</>
      ))}
    </div>
  )
}

export default StoryBook
