import { Component, OnInit } from '@angular/core';
import { Institution } from '../_models/institution'; 
import { InstitutionService } from '../_services/institution.service'; 

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {


  institutions: Institution[]; 

  constructor(
    private institutionService: InstitutionService, 
  ) { }

  ngOnInit() {
    this.getInsitutions(); 
  }

  getInsitutions(): void {
    this.institutionService.getAll().subscribe(
      institutions => this.institutions = institutions   
    ); 
  }
}
