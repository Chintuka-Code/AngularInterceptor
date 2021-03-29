import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor() {}
  // role: Array<string> = ['admin', 'subadmin', 'SME', 'BDE', 'Developer'];

  // checkRole(currentRole):Observable<any> {
  //   return new Observable((ob: any) => {
  //     return this.role
  //   }).pipe(find((value) => value === currentRole));
  // }
}
