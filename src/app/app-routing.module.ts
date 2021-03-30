import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { Test2Component } from './component/test2/test2.component';
import { FormTestComponent } from './component/form-test/form-test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    data: {
      role: 'admin',
    },
  },
  {
    path: 'test2',
    component: Test2Component,
    data: {
      role: 'test',
    },
  },
  {
    path: 'formTest',
    component: FormTestComponent,
  },
  { path: '**', redirectTo: 'test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
