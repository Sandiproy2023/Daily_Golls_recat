import React from 'react';
import './App.css';



const App = () => <Personlist />

const Personlist = () => {
  const people = [
    {
      image: 1, name: "sandip", job: "devolopar"
    },
    {
      image: 2, name: "ram", job: "web desiner"
    },
    {
      image: 3, name: "shame", job: "driver"
    },
    {
      image: 4, name: "raju", job: "work shop"
    },
  ]


  return (

    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestiae eligendi excepturi mollitia </Person>
      <Person person={people[2]} />
      <Person person={people[3]} />
    </section>

  )
}

const Person = props => {
  const { image, job, name } = props.person;
  const { children } = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${image}.jpg`;
  return (

    <div className='person'>
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  )
}


export default App