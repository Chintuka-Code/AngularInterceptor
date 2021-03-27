import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}
  url: string = `http://localhost:3000/test`;
  test_service() {
    return this.http.get(`${this.url}/fetch`);
  }
}
