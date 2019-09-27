import { Component, OnInit } from '@angular/core';
import {RgForet} from '../_models/rg_foret';
import {RgForetService} from '../_services/rg-foret.service';

@Component({
  selector: 'app-validation-ressource',
  templateUrl: './validation-ressource.component.html',
  styleUrls: ['./validation-ressource.component.scss']
})
export class ValidationRessourceComponent implements OnInit {

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
