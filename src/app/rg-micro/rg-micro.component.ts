import { Component, OnInit } from '@angular/core';
import { RgMicroService } from '../_services/rg-micro.service';
import { RgMicro } from '../_models/rg_micro';

@Component({
  selector: 'app-rg-micro',
  templateUrl: './rg-micro.component.html',
  styleUrls: ['./rg-micro.component.scss']
})
export class RgMicroComponent implements OnInit {

  rgMicros: RgMicro[]; 

  constructor(
    private rgMicroService: RgMicroService,
  ) { }

  ngOnInit() {
    this.getRgMicros(); 
  }

  getRgMicros(): void {
    this.rgMicroService.getAll().subscribe(
      rgMicros => this.rgMicros = rgMicros
    );
  }

}
