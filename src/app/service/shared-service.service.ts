import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor() {}
  private messageSource = new BehaviorSubject<object>({});
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: object) {
    this.messageSource.next(message);
  }
}
