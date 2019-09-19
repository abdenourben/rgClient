import { Component, OnInit } from '@angular/core';
import { RgAnimale } from '../_models/rg_animale';
import { RgAnimaleService } from '../_services/rg-animale.service';

@Component({
  selector: 'app-rg-animale',
  templateUrl: './rg-animale.component.html',
  styleUrls: ['./rg-animale.component.scss']
})
export class RgAnimaleComponent implements OnInit {

  rgAnimales: RgAnimale[]; 

  constructor(
    private rgAnimaleService: RgAnimaleService,
  ) { }

  ngOnInit() {
    this.getRgAnimale(); 
  }

  getRgAnimale(): void {
    this.rgAnimaleService.getAll().subscribe(
      rgAnimales => this.rgAnimales = rgAnimales
    );
  }

}
