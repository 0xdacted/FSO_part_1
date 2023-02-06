import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>  
)

const Display = ({text, count}) => { 
  return (
    <div>
      {text} {count}
    </div>
  )
}

  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const handleGood = () => {
      setGood(good + 1)
    }

    const handleNeutral = () => {
      setNeutral(neutral + 1)
    }

    const handleBad = () => {
      setBad(bad + 1)
    }
    return (
      <div>
      <h1>
        give feedback
      </h1>
      <div>
        <Button handleClick={handleGood} text='good'/>
        <Button handleClick={handleNeutral} text='neutral'/>
        <Button handleClick={handleBad} text='bad'/>
      </div>
      <h1>
        statistics
      </h1>
      <div>
        <Display text='good' count={good}/>
        <Display text='neutral' count={neutral}/>
        <Display text='bad' count={bad}/>
      </div>
      </div>
    )
  }

export default App;

