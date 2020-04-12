import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

export class TaskToViewService implements Task {
  constructor() { }
  uid: string;
  title: string;
  description: string;
  isDone: boolean;
}
