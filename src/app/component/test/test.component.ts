import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private test_service_obj: TestService) {}

  test() {
    localStorage.setItem(
      'token',
      'this is your token.you can use it for your testing'
    );
    this.test_service_obj.test_service().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error.customMessage);
        alert(error.customMessage);
      }
    );
  }

  ngOnInit(): void {}
}
