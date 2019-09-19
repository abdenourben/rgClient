import { Component, OnInit } from '@angular/core';
import { RgForetService } from '../_services/rg-foret.service';
import { RgForet } from '../_models/rg_foret';

@Component({
  selector: 'app-rg-foret',
  templateUrl: './rg-foret.component.html',
  styleUrls: ['./rg-foret.component.scss']
})
export class RgForetComponent implements OnInit {

  rgForets : RgForet[]; 

  constructor(
    private rgForetService: RgForetService
  ) { }

  ngOnInit() {
    this.getRgForets(); 
  }

  getRgForets(): void {
    this.rgForetService.getAll().subscribe(
      rgForets => this.rgForets = rgForets
    );
  }

}
