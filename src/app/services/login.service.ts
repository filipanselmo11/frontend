import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../types/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  loginUser(username: string, password: string) {
    return this.httpClient.post<LoginRequest>(`${this.baseURL}/user/login`, {
      username,
      password
    })
  }
}
