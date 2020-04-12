import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs'
import { ApiService } from '../services/api.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnDestroy {
  title = 'Home'
  tasks: [Task]
  subscription1: Subscription
  subscription2: Subscription
  constructor(private http: HttpClient, public api: ApiService) {
    this.subscription1 = api.getTasks().subscribe(() => {
      this.getTasks()
    })
  }
  getTasks = async () => {
    this.subscription2 = this.http.get<[Task]>('http://localhost:5000/tasks')
      .subscribe(data => {
        this.tasks = data
      })
  }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }

}
