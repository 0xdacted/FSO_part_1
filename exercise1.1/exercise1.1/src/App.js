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
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
    Total Exercises: {props.totalexercises}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
    Class: {props.part} <br></br>
    Exercises: {props.exercises}
    </p>
    );
    };


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
      <Total totalexercises={exercises1 + exercises2 + exercises3}/>
  
    </div>
  )
}

export default App
