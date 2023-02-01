const Header = (props) => {
  return (
    <>
    {props.course}
    </>
  )
}

const Content = (props) => {
  return (
    <p>
      Part One: {props.part1} <br></br>
      Exercises:{props.exercises1}
      <br></br>
      Part Two: {props.part2} <br></br>
      Exercises: {props.exercises2}
      <br></br>
      Part Three: {props.part3} <br></br>
      Exercises: {props.exercises3}
      <br></br>
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1= {exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
