const Header = (props) => {
  return (
    <>
    {props.course.name}
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total Exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
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
  const course = { 
    id: 1,
    name: 'Half Stack application development',
    parts: [
    { name:'Fundamentals of React', exercises: 10, id: 1 },
    { name: 'Using props to pass data', exercises: 7, id: 2 },
    { name: 'State of a component', exercises: 14, id: 3 }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course = {course}/>
      <Total course={course}/>
  
    </div>
  )
}

export default App
