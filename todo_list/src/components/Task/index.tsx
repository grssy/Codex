import { check } from 'prettier';
import React, { useEffect, useState } from 'react';

import ITaskService from '../../services/ITaskService';
import TaskFirebaseClient from '../../services/TaskClient';

import deleteImg from '../../assets/delete.svg';
import TaskType from '../../types/Task';

import './styles.css';

interface TaskProps {
  TaskData: TaskType;
  deleteTask(): void;
}

const Task: React.FC<TaskProps> = ({
  deleteTask,
  TaskData: { title, checked, id },
}: TaskProps) => {
  const [checkboxValue, setCheckboxValue] = useState(checked);

  useEffect(() => {
    const database: ITaskService = new TaskFirebaseClient();
    const edit = async () => {
      if (id !== undefined && checkboxValue !== undefined)
        await database.editTask(id, checkboxValue);
    };

    edit();
  }, [checkboxValue]);

  const handleCheck = () => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <div className='task-body'>
      <div className='task-title'>
        <input
          type='checkbox'
          checked={checkboxValue}
          onChange={handleCheck}
          className='checkbox'
        />

        {checkboxValue ? <p className='checked'>{title}</p> : <p>{title}</p>}
      </div>
      <div>
        <button className='delete' onClick={deleteTask}>
          <img src={deleteImg} alt='delete task' />{' '}
        </button>
      </div>
    </div>
  );
};

export { Task };
