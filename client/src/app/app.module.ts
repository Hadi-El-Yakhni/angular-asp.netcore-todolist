import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApiService } from './services/api.service'
import { TaskToViewService } from './services/task-to-view.service'
import { HeaderService } from './services/header.service'

import { AppComponent } from './app.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const appRoutes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'add', component: TaskAddComponent },
  { path: ':id', component: TaskDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskDetailsComponent,
    TaskItemComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    TaskToViewService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
