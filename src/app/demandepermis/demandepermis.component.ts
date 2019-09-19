import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-demandepermis',
  templateUrl: './demandepermis.component.html',
  styleUrls: ['./demandepermis.component.scss']
})
export class DemandepermisComponent implements OnInit {

  formDemande: FormGroup; 
  constructor() { }

  ngOnInit() {
  }

}
