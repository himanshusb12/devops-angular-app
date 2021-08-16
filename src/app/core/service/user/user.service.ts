import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = '/assets/templates';

  constructor(private readonly httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    const url = `${this.BASE_URL}/users.json`;
    return this.httpClient.get<User[]>(url);
  }
}
