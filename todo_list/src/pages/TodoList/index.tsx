import React, { useEffect, useState } from 'react';
import { Task } from '../../components/Task';
import ITaskService from '../../services/ITaskService';
import TaskFirebaseClient from '../../services/TaskClient';
import TaskType from '../../types/Task';
import { collection, query, onSnapshot } from 'firebase/firestore';

import './styles.css';
import db from '../../config/firebase';

const TodoList: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>();

  const handleAddTask = async (): Promise<void> => {
    if (taskTitle !== '') {
      const database: ITaskService = new TaskFirebaseClient();

      const newTask: TaskType = {
        title: taskTitle,
        checked: false,
      };

      await database.addNewTask(newTask);
      setTaskTitle('');
    }
  };

  const handleDeleteTask = async (id: string | undefined): Promise<void> => {
    const database: ITaskService = new TaskFirebaseClient();

    if (id !== undefined) await database.deleteTask(id);
  };

  const getAllTasks = async (): Promise<void> => {
    const database: ITaskService = new TaskFirebaseClient();
    const data = await database.getAllTasks();
    setTasks(data);
  };

  useEffect(() => {
    getAllTasks();

    const q = query(collection(db, 'tasks'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasks: TaskType[] = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tasks);
    });
  }, []);

  return (
    <div className='todo-background'>
      <h1>Todo List</h1>
      <div className='body'>
        <input
          type='text'
          placeholder='Enter your task'
          value={taskTitle}
          onChange={(event): void => {
            setTaskTitle(event.target.value);
          }}
          className='input-task'
        />
        <button className='add-task' onClick={handleAddTask}>
          Adicionar
        </button>
      </div>

      {tasks?.map((task) => (
        <Task
          key={task.id}
          TaskData={task}
          deleteTask={(): void => {
            handleDeleteTask(task.id);
          }}
        />
      ))}
    </div>
  );
};

export { TodoList };
