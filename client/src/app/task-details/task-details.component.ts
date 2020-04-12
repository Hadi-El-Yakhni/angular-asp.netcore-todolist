import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  data: Task
  constructor(public api: ApiService) {
    this.data = JSON.parse(localStorage.getItem('task')) || { uid: "", title: "", description: "", isDone: false }
  }
  updateTask() {
    const task: Task = {
      uid: this.data.uid,
      title: this.data.title.trim(),
      description: this.data.description ? this.data.description.trim() : "",
      isDone: this.data.isDone
    }
    this.api.updateTask(task, 'from task details screen')
  }
}
