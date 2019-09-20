import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core'
import User from '../users.model'
import UsersService from '../users.service'

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  constructor(private userService: UsersService) {}
  @HostBinding('attr.class') host =
    'row no-gutters justify-content-center align-items-center position-fixed mmodal '
  private deleting = false
  @Output()
  private finish = new EventEmitter<User>()

  @Input()
  private user: User
  ngOnInit() {}

  deleteUser() {
    this.deleting = true
    this.userService.deleteUser(this.user).subscribe(x => {
      this.deleting = false
      this.finish.emit(this.user)
    })
  }
  cancel() {
    this.finish.emit(null)
  }
}
