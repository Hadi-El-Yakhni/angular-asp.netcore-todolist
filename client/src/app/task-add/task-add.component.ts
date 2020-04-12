import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Task } from '../models/Task'

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  title: string
  description: string
  constructor(private api: ApiService) { }
  addTask() {
    const task: Task = {
      title: this.title.trim(),
      description: this.description ? this.description.trim() : "",
      isDone: false
    }
    this.api.addTask(task)
  }
}
