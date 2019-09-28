import { Component, OnInit } from '@angular/core'
import User from './users.model'
import UsersService from './users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[] = []
  private loading = true
  private adding = false
  private userToDelete: User
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService.fetchUsers().subscribe(users => {
      this.users = users
      this.loading = false
    })
  }

  onAddClicked = () => {
    this.adding = true
  }

  onAddCosed = (user?: User) => {
    console.log('url      ......')
    if (user == null) {
      this.adding = false
    } else {
      window.location.href = 'http://localhost:4200/admin/users'
    }
  }

  onDeleteClosed = (user?: User) => {
    if (user == null) {
      this.userToDelete = null
    } else {
      window.location.href = 'http://localhost:4200/admin/users'
    }
  }


  openDeleteModal(user: User) {
    this.userToDelete = user
  }
}
