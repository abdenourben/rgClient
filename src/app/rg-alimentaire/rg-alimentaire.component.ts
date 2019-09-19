import { Component, OnInit } from '@angular/core';
import { RgAlimentaireService } from '../_services/rg-alimentaire.service';
import { RgAlimentaire } from '../_models/rg_alimentaire';

@Component({
  selector: 'app-rg-alimentaire',
  templateUrl: './rg-alimentaire.component.html',
  styleUrls: ['./rg-alimentaire.component.scss']
})
export class RgAlimentaireComponent implements OnInit {

  rgAlimentaires: RgAlimentaire[]; 

  constructor(
    private rgAlimentaireService: RgAlimentaireService
  ) { }

  ngOnInit() {
    this.getRgAlimentaire(); 
  }

  getRgAlimentaire(): void {
    this.rgAlimentaireService.getAll().subscribe(
      rgAlimentaires => this.rgAlimentaires = rgAlimentaires   
    ); 
  }

}
