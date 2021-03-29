import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SharedServiceService } from '../../service/shared-service.service';
import { RoleService } from '../../service/role.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component implements OnInit {
  activeUser: boolean;
  user: object;
  constructor(
    private shared_ser: SharedServiceService,
    private roleSer: RoleService
  ) {}

  show() {
    this.shared_ser.currentMessage.subscribe((res: object) => {
      this.activeUser = Object.keys(res).length === 0 ? false : true;
    });
  }

  check() {
    const user = { name: 'sabban', age: 20, course: 'Data' };
    // object.hasOwnProperty check wether a key exist in object or not
    // const data = Object.hasOwnProperty('name');

    // it will return array of all keys values
    const data = Object.values('name');

    // console.log(data);
  }

  // checkForRole() {
  //   this.roleSer.checkRole('admin').subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  ngOnInit(): void {
    this.show();
    this.check();
    // this.checkForRole();
  }
}
