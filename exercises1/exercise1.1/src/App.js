const Header = ({name}) => {
  return (
    <>
    {name}
    </>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
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

const Part = ({name, exercises}) => {
  return (
    <p>
    Class: {name} <br></br>
    Exercises: {exercises}
    </p>
    );
    };

const Course = ({course}) => {
  return (
    <div>
    <Header course={course.name}/>
    <Content course = {course}/>
    <Total course={course}/>
    </div>
  )
}

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
     <Course course={course}/>
    </div>
  )
}

export default App
