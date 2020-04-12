import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { BehaviorSubject, Observable } from 'rxjs'
import { Task } from '../models/Task'
import { Router } from '@angular/router'
import { HeaderService } from './header.service'

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private location: Location, private router: Router, private header: HeaderService) { }
  tasks = new BehaviorSubject<string>("First tasks fetch")
  url = 'http://localhost:5000/tasks'
  getTasks(): Observable<string> {
    return this.tasks.asObservable()
  }
  addTask(task: Task) {
    this.http.post(this.url, task).subscribe(() => {
      this.header.title = 'TODO'
      this.router.navigateByUrl('/')
    })
  }
  updateTask(task: Task, fromWhichScreen?: string) {
    localStorage.setItem('task', JSON.stringify(task))
    this.http.patch(this.url, task).subscribe(() => {
      if (fromWhichScreen !== 'from task details screen')
        this.tasks.next('refetch tasks . . .')
      else {
        this.header.title = 'TODO'
        this.router.navigateByUrl('/')
      }
    })
  }
  deleteTask(uid: string) {
    localStorage.clear()
    this.http.delete(this.url, { params: new HttpParams().set('uid', uid) })
      .subscribe(() => {
        this.tasks.next('refetch tasks . . .')
      })
  }
}
