import db from '../config/firebase';
import ITaskService from './ITaskService';
import TaskType from '../types/Task';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

export default class TaskFirebaseClient implements ITaskService {
  async getAllTasks(): Promise<TaskType[]> {
    const data = await getDocs(collection(db, 'tasks'));
    const tasks: TaskType[] = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return tasks;
  }

  async addNewTask(task: TaskType): Promise<void> {
    await addDoc(collection(db, 'tasks'), {
      ...task,
    });
  }

  async deleteTask(id: string): Promise<void> {
    if (id !== undefined) await deleteDoc(doc(db, 'tasks', id));
  }

  async editTask(id: string, checked: boolean): Promise<void> {
    const task = doc(db, 'tasks', id);
    await updateDoc(task, {
      checked: checked,
    });
  }
}
