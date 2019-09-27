import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ValidationRessourceComponent} from '../validation-ressource/validation-ressource.component';

const routes: Routes = [

    { path: 'gestionRg/ValidationRg', component: ValidationRessourceComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
