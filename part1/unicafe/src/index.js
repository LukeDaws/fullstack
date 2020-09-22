import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div><h1> Give Feedback </h1> </div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <div><h1> Statistics </h1></div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad
  const average = ((good - bad)/all)
  const positive =  (good / all * 100)

  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <div>No feedback given</div>
    )
  return(
    <table>
    <tbody>
      <tr>
        <td>Good</td><td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td><td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td><td>{bad}</td>
      </tr>
      <tr>
        <td>All</td><td>{all}</td>
      </tr>
      <tr>
        <td>Average</td><td>{average}</td>
      </tr>
      <tr>
        <td>Positive</td><td>{positive}%</td>
      </tr>
      </tbody>
    </table>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
