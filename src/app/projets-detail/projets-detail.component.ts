import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Activite } from '../_models/activite';
import { ActiviteService } from '../_services/activite.service';
@Component({
  selector: 'app-projets-detail',
  templateUrl: './projets-detail.component.html',
  styleUrls: ['./projets-detail.component.scss']
})
export class ProjetsDetailComponent implements OnInit {
  activite: Activite;
  constructor(
      private activiteService: ActiviteService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location,
  ) { }

  ngOnInit() {
    this.getProject();
  }

  deleteActiviteId(id: number): void{
    this.activiteService.deleteActivite(id).subscribe(
        activite => this.activite = activite

    );
  }
  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activiteService.getDetailActivite(id).
    subscribe(
        activite => this.activite = activite
    );
  }
}
