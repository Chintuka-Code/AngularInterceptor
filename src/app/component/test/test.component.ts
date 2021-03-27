import { Component, OnInit } from '@angular/core';
import { forkJoin, zip } from 'rxjs';
import { take } from 'rxjs/operators';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private test_service_obj: TestService) {}
  message: string;

  test() {
    localStorage.setItem(
      'token',
      'this is your token.you can use it for your testing'
    );
    const req1 = this.test_service_obj.test_service().pipe(take(1));
    const req2 = this.test_service_obj.test_service().pipe(take(1));

    // zip(req1, req2).subscribe(
    //   ([res, resss]) => {
    //     // console.log(res);
    //   },
    //   (error) => {
    //     this.message = error.message;
    //   }
    // );

    forkJoin([req1, req2]).subscribe(
      ([res, resss]) => {
        // console.log(res);
      },
      (error) => {
        this.message = error.message;
      }
    );
  }

  ngOnInit(): void {}
}
