import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RgComponent} from '../rg/rg.component';
import {AdminComponent} from './admin.component';
import {InstitutionAddComponent} from '../institution-add/institution-add.component';
import {InstitutionEditComponent} from '../institution-edit/institution-edit.component';
import {InstitutionComponent} from '../institution/institution.component';
import {RgMicroAddComponent} from '../rg-micro-add/rg-micro-add.component';
import {RgAliemntaireAddComponent} from '../rg-aliemntaire-add/rg-aliemntaire-add.component';
import {RgMarineAddComponent} from '../rg-marine-add/rg-marine-add.component';
import {RgAnimaleAddComponent} from '../rg-animale-add/rg-animale-add.component';
import {RgForetAddComponent} from '../rg-foret-add/rg-foret-add.component';
import {WorkflowComponent} from '../workflow/workflow.component';
import {AddeventComponent} from '../addevent/addevent.component';
import {AddprojectComponent} from '../addproject/addproject.component';


const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'gestionRg/creationRgF', component: RgForetAddComponent},
      {path: 'gestionRg/creationRgsd', component: RgAnimaleAddComponent},
      {path: 'gestionRg/creationRgp', component: RgAliemntaireAddComponent},
      {path: 'gestionRg/creationRgm', component: RgMarineAddComponent},
      {path: 'gestionRg/creationRgmo', component: RgMicroAddComponent},
      {path: 'annuaire/creation', component: InstitutionAddComponent},
      {path: 'annuaire/suppression', component: InstitutionComponent},
      {path: 'annuaire/modification', component: InstitutionEditComponent},
      {path: 'event/creation', component: AddeventComponent},
      {path: 'projet/creation', component: AddprojectComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
