import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { User } from '../_models/user'; 
import { AuthenticationService } from '../_services/authentication.service'; 


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  currentUser: User; 

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService, 
  ) {
    this.authenticationService.currentUser.subscribe(
      x => this.currentUser = x
    ); 
   }

   get isConnected() {
    return this.currentUser; 
  }

   logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
