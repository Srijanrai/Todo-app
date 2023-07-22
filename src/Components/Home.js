import React, { useEffect, useState } from 'react'
import './Home.css'
function Home() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if(task.length>0){
        setList(list => [...list, task])
        setTask('');
        setLoading(true)
        }

    }

    const handleDelete = (key) => {
        const newList = list.filter((_, i) => i !== key);
        setList(newList)
        //console.log(key);
    }

    const handleUpdate = (key) => {
        const updated = prompt('Update me..');
        console.log(key);
        const setUpdated = list.map((task, i) => {
            if (i === key) {
                return updated;
            }
            else return task;
        })
        setList(setUpdated);
    }

    return (
        <>
            <div className='header'>
                <h1>Todo App</h1>
                <h3>Make your day one step ahead!!</h3>
                <div className='input'>
                    <input type="text" value={task} placeholder='Add Todo' required
                        onChange={(e) => (setTask(e.target.value))}
                    ></input>
                    <button className = 'button' onClick={() => handleClick()}>ADD TASK</button>
                    <div className='display' >

                        {
                            list.map((value, key) => {
                                return <div className='loop'>
                                    <h3>{value.toUpperCase()}</h3>
                                    <button className='button' onClick={() => handleDelete(key)}>Delete</button>
                                    <button className='button' onClick={() => handleUpdate(key)}>Update</button>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
