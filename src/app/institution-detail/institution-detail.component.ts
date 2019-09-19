import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Location } from '@angular/common'; 

import { Institution } from '../_models/institution'; 
import { InstitutionService } from '../_services/institution.service'; 


@Component({
  selector: 'app-institution-detail',
  templateUrl: './institution-detail.component.html',
  styleUrls: ['./institution-detail.component.scss']
})
export class InstitutionDetailComponent implements OnInit {

  institution: Institution; 

  constructor(
    private institutionService: InstitutionService, 
    private router: Router,
    private route: ActivatedRoute,  
    private location: Location,
  ) { }

  ngOnInit() {
    this.getInsitution(); 
  }

  getInsitution(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.institutionService.getDetailInstitution(id).
    subscribe(
      instiution => this.institution = instiution
    );
  }

}
