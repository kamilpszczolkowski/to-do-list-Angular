import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksList = [
      {name: 'Do the shopping', created: new Date().toLocaleString(), isDone: false},
      {name: 'Clean the room', created: new Date().toLocaleString(), isDone: false},
      {name: 'Learn Angular', created: new Date().toLocaleString(), isDone: false},
      {name: 'Make a dinner', created: new Date().toLocaleString(), isDone: false},
      {name: 'Do running excercises', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    ];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    console.log(list);
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
}
