import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter:FilterValuesType
    changeTaskStatus:(taskId:string,isDone:boolean)=>void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let[error,setError]=useState<string|null>(null)
    const addTask = () => {
        if(title.trim()!==""){
        props.addTask(title)
        setTitle("")
    }else {
            setError("Error")
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    const allBtnClass=props.filter==="all"?"active-filter":""
    const activeBtnClass=props.filter==="active"?"active-filter":""
    const completedBtnClass=props.filter==="completed"?"active-filter":""
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input placeholder={"Enter new task title"}
                value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error?"error":""}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)
                    const changeTaskStatus=(e:ChangeEvent<HTMLInputElement>)=>
                        props.changeTaskStatus(t.id, e.currentTarget.checked)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}
                               onChange={changeTaskStatus}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={allBtnClass}
                    onClick={ onAllClickHandler }>All</button>
            <button className={activeBtnClass}
                onClick={ onActiveClickHandler }>Active</button>
            <button className={completedBtnClass}
                onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
