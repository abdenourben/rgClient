import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PermisComponent } from './permis/permis.component';
import { DemandepermisComponent } from './demandepermis/demandepermis.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { EventComponent } from './event/event.component';
import { AddeventComponent } from './addevent/addevent.component';

import { AdminComponent } from '../app/admin/admin.component'; 
import { AuthGuard } from '../app/_helpers/auth.guard'; 
import { Role } from './_models/role'; 
import { InstitutionComponent } from './institution/institution.component';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { RgMarineComponent } from './rg-marine/rg-marine.component'; 
import { RgAlimentaireComponent } from './rg-alimentaire/rg-alimentaire.component'; 
import { RgMicroComponent } from './rg-micro/rg-micro.component'; 
import { RgAnimaleComponent } from './rg-animale/rg-animale.component'; 
import { RgForetComponent } from './rg-foret/rg-foret.component'; 
import { InstitutionEditComponent } from './institution-edit/institution-edit.component'; 
import { InstitutionAddComponent } from './institution-add/institution-add.component'; 
import { RgMarineAddComponent } from './rg-marine-add/rg-marine-add.component'; 
const routes: Routes = [
  //{path: '',redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'permis', component: PermisComponent},
  {path: 'permis/demande', component : DemandepermisComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'projets/ajouterprojets', component: AddprojectComponent},
  {path: 'evenements', component: EventComponent},
  {path: 'evenements/ajouterevenements', component: AddeventComponent},
  {path: 'institution', component: InstitutionComponent},
  { path: 'institution/add', component: InstitutionAddComponent }, 
  { path: 'institution/:id', component: InstitutionDetailComponent}, 
  { path: 'institution/edit/:id', component: InstitutionEditComponent },
  { path: 'rg/marine', component: RgMarineComponent }, 
  { path: 'rg/marine/add', component: RgMarineAddComponent }, 
  { path: 'rg/foret', component: RgForetComponent }, 
  { path: 'rg/micro', component: RgMicroComponent }, 
  { path: 'rg/alimentaire', component: RgAlimentaireComponent }, 
  { path: 'rg/animale', component: RgAnimaleComponent }, 
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
