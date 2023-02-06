import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>  
)

const Display = ({text, count}) => { 
  return (
    <tr>
      <td>{text}</td> 
      <td>{count}</td>
    </tr>
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

    const total = good + bad + neutral
    const average = (good - bad) / total
    const positive = good / total
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
      {total > 0 ? ( 
      <table>
        <tbody>
          <Display text='good' count={good}/>
          <Display text='neutral' count={neutral}/>
          <Display text='bad' count={bad}/>
          <Display text='all' count={total}/>
          <Display text='average' count={average} />
          <Display text='positive' count={`${positive} %`} /> 
        </tbody>
      </table>
      )
      :<div>No feedback given </div>
      }
  
      </div>
    )
  }

export default App;

