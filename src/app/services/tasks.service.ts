import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Do the shopping', created: new Date().toLocaleString(), isDone: false},
      {name: 'Clean the room', created: new Date().toLocaleString(), isDone: false},
      {name: 'Learn Angular', created: new Date().toLocaleString(), isDone: false},
    {name: 'Make a dinner', created: new Date().toLocaleString(), isDone: false}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add( task: Task ) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter( e => e !== task );
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
