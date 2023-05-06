import React, {  useState } from 'react'
import Task from './Task'

const Home = () => {
    // const initialArray = localStorage.getItem("tasks")?
    // JSON.parse(localStorage.getItem('tasks')):[];
    

const [tasks, setTasks] = useState([]);//initialArray
    const [title,setTitle] = useState ("");
    const [description,setDescription] = useState ("");
 
    // console.log(title,description);
    const submitHandler = (e)=>{
        e.preventDefault();

        setTasks([...tasks,{title,description}]);
             
         };
         const deletTask =(index)=>{
             const filterarr = tasks.filter((val,i)=>{
                return  i !== index;
             })
             console.log(filterarr);
             setTasks(filterarr)
         };
        //  useEffect(()=>{
        //     localStorage.setItem("tasks",JSON.stringify(tasks))
        //  },[tasks])
    return (
        <div className='container'>
            <h1>DAILY golls</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                <button >ADD</button>
            </form>
            {
                tasks.map((item,index)=>(
                    <Task key={index}
                     title={item.title}
                     description={item.description}
                     deletTask={deletTask}
                     index={index}
                     />
                ))
            }
        </div>
    )
}

export default Home