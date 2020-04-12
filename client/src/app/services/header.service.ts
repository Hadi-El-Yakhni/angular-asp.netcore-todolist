import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class HeaderService {
  constructor(private location: Location) {
    if (location.path() === '') {
      this.title = 'TODO'
    }
    else if (location.path() === '/add')
      this.title = 'ADD TASK'
    else
      this.title = 'EDIT TASK'
  }
  public title: string
}