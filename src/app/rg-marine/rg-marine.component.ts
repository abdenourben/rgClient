import { Component, OnInit } from '@angular/core';
import { RgMarine } from '../_models/rg_marine'; 
import { RgMarineService } from '../_services/rg-marine.service'; 

@Component({
  selector: 'app-rg-marine',
  templateUrl: './rg-marine.component.html',
  styleUrls: ['./rg-marine.component.scss']
})
export class RgMarineComponent implements OnInit {

  rgMarines: RgMarine[]; 

  constructor(
    private rgMarineService: RgMarineService,
  ) { }

  ngOnInit() {
    this.getRgMarines(); 
  }

  getRgMarines(): void {
    this.rgMarineService.getAll().subscribe(
      rgMarines => this.rgMarines = rgMarines
    );
  }

}
