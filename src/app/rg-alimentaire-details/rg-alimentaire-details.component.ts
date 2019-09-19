import { Component, OnInit } from '@angular/core';
import { RgAlimentaireService } from '../_services/rg-alimentaire.service';
import { ActivatedRoute } from '@angular/router';
import { RgAlimentaire } from '../_models/rg_alimentaire';

@Component({
  selector: 'app-rg-alimentaire-details',
  templateUrl: './rg-alimentaire-details.component.html',
  styleUrls: ['./rg-alimentaire-details.component.scss']
})
export class RgAlimentaireDetailsComponent implements OnInit {
  rgAlimentaire: RgAlimentaire;
  constructor(
    private rgAlimentaireservice: RgAlimentaireService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.getRgAlimentaireDetail();
  }

  getRgAlimentaireDetail(){
    const id= +this.route.snapshot.paramMap.get('id');
    this.rgAlimentaireservice.getDetailRgAlimentaire(id)
    .subscribe(
      rgAlimentaire => this.rgAlimentaire = rgAlimentaire
    );
  }
}
