import { Component, OnInit } from '@angular/core';
import {Rg} from '../_models/rg';
import {RgService} from '../_services/rg.service';


@Component({
  selector: 'app-validation-ressource',
  templateUrl: './validation-ressource.component.html',
  styleUrls: ['./validation-ressource.component.scss']
})
export class ValidationRessourceComponent implements OnInit {

  rgNonValides: Rg[];
  loading = true;

  constructor(public rgService: RgService) { }

  ngOnInit() {
    this.rgService.getAll().subscribe(rg => {
      this.rgNonValides = rg;
      this.loading = false;
    });
  }

}
