import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import User from './users.model'
@Injectable({
  providedIn: 'root'
})
export default class UsersService {
  constructor(private http: HttpClient) {}
  fetchUsers() {
    return this.http
      .get('http://localhost:8080/users.json')
      .pipe(map((users: []) => users.map(this.convert)))
  }

  convert(user: any) {
    const {
      name,
      status,
      image = 'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      createdAt,
      role
    } = user
    return new User(image, name, createdAt, role, status)
  }

  addUser = (user: User) => of(true).pipe(delay(3000))
  deleteUser = (user: User) => of(true).pipe(delay(3000))
}
