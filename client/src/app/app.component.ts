import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { HeaderService } from './services/header.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public api: ApiService,
    public header: HeaderService,
    private router: Router,
    private platformLocation: PlatformLocation
  ) {
    platformLocation.onPopState(() => {
      switch (window.location.toString()) {
        case 'http://localhost:4200/tasks/':
          header.title = 'TODO'
          break
        case 'http://localhost:4200/tasks/add':
          header.title = 'ADD TASK'
          break
        default:
          header.title = 'EDIT TASK'
      }
    })
  }
  goToAdd() {
    this.header.title = 'ADD TASK'
    this.router.navigate(['add'])
  }
  goBack() {
    this.header.title = 'TODO'
    this.router.navigate(['/'])
  }
}
