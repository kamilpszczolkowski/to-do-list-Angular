import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  @Input() tasksList = [];

  @Output() removeTask = new EventEmitter<string>();
  @Output() taskDone = new EventEmitter<string>();

  remove(task){
    this.removeTask.emit(task);
  }

  done(task){
    this.taskDone.emit(task);
  }

  constructor() { }

  ngOnInit() {
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green'
  }
}
