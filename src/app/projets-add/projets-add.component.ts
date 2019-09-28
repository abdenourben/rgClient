import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from '../_services/activite.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projets-add',
  templateUrl: './projets-add.component.html',
  styleUrls: ['./projets-add.component.scss']
})
export class ProjetsAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(
      private activiteService: ActiviteService,
      private formBuilder: FormBuilder,
      private router: Router,
  ) {
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      titre: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      domaine: ['', Validators.required],
      description: ['', Validators.required],
      contenu: ['', Validators.required],
      type: ['', Validators.required],
      localisation: ['', Validators.required],
    });
  }

  activiteAdd() {
    this.activiteService.addActivite(this.addForm.value)
        .subscribe(
            data => {
              this.router.navigate(['/activite'])
            }
        );
  }
}



