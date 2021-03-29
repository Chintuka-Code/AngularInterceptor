import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { Test2Component } from './component/test2/test2.component';
import { FormTestComponent } from './component/form-test/form-test.component';

import { LoginGuard } from './gaurd/login.guard';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    data: {
      role: 'admin',
    },
    canActivate: [LoginGuard],
  },
  {
    path: 'test2',
    component: Test2Component,
    data: {
      role: 'test',
    },
    canActivate: [LoginGuard],
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
