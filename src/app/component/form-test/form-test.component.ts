import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
export class FormTestComponent implements OnInit {
  constructor() {}
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    skills: new FormArray([], Validators.required),
  });
  skills = this.user.get('skills') as FormArray;

  getValue() {
    const data = this.user.getRawValue();
    console.log(data);
  }

  addFeild() {
    this.skills.push(new FormControl('', Validators.required));
  }

  remove(index) {
    this.skills.length > 1 ? this.skills.removeAt(index) : '';
  }

  ngOnInit(): void {
    this.addFeild();
  }
}
