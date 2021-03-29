import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { TestInterceptor } from './interceptor/test.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './component/test2/test2.component';
import { FormTestComponent } from './component/form-test/form-test.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Test2Component, FormTestComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
