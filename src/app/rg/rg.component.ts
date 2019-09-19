import { Component, OnInit } from '@angular/core';
import { Rg } from '../_models/rg'; 
import { RgService } from '../_services/rg.service'; 

@Component({
  selector: 'app-rg',
  templateUrl: './rg.component.html',
  styleUrls: ['./rg.component.scss']
})
export class RgComponent implements OnInit {

  rgs: Rg[]; 

  constructor(
    private rgService: RgService, 
  ) { }

  ngOnInit() {
    this.getRgs(); 
  }

  getRgs(): void {
    this.rgService.getAll().subscribe(
      rgs => this.rgs = rgs
    );
  }

}
