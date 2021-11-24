import TaskType from '../types/Task';

export default interface ITaskService {
  getAllTasks(): Promise<TaskType[]>;
  addNewTask(task: TaskType): Promise<void>;
  deleteTask(id: string): Promise<void>;
  editTask(id: string, checked: boolean): Promise<void>;
}
