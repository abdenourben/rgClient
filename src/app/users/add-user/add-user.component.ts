import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output
} from '@angular/core'
import User from '../users.model'
import UsersService from '../users.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private userService: UsersService) {}
  @HostBinding('attr.class') host =
    'row no-gutters justify-content-center align-items-center position-fixed mmodal'

  @Output()
  private finish = new EventEmitter<User>()

  user = new User('', '', '', '', '', '', '', '', '')
  private submitting: boolean
  // tslint:disable-next-line: max-line-length
  regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ngOnInit() {
    console.log('reg   ', this.regex.test('akram@gmai.com'))
  }
  submit() {
    console.log({ user: this.user })
    this.submitting = true
    this.userService.addUser(this.user).subscribe(x => {
      this.submitting = false
      this.finish.emit(this.user)
    })
    // this.finish.emit(true)
  }
  cancel() {
    this.finish.emit(null)
  }
}
