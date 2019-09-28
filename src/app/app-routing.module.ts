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
import { EventComponent } from './event/event.component';

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
import { RgAlimentaireDetailsComponent } from './rg-alimentaire-details/rg-alimentaire-details.component';
import { RgForetDetailsComponent } from './rg-foret-details/rg-foret-details.component';
import { RgMicroDetailsComponent } from './rg-micro-details/rg-micro-details.component';
import { RgMarineDetailsComponent } from './rg-marine-details/rg-marine-details.component';
import { RgAnimaleDetailsComponent } from './rg-animale-details/rg-animale-details.component';
import { UsersComponent } from './users/users.component';
import { RgMarineAddComponent } from './rg-marine-add/rg-marine-add.component';
import { RgForetAddComponent } from './rg-foret-add/rg-foret-add.component';
import { RgMicroAddComponent } from './rg-micro-add/rg-micro-add.component';
import { RgAliemntaireAddComponent } from './rg-aliemntaire-add/rg-aliemntaire-add.component';
import { RgAnimaleAddComponent } from './rg-animale-add/rg-animale-add.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventEditComponent} from './event-edit/event-edit.component';
import {EventAddComponent} from './event-add/event-add.component';
import {ProjetsAddComponent} from './projets-add/projets-add.component';
import {ProjetsEditComponent} from './projets-edit/projets-edit.component';
import {ProjetsDetailComponent} from './projets-detail/projets-detail.component';
import {RgVersionService} from './_services/rg-version.service';
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
  {path: 'projets/detais/:id',  component: ProjetsDetailComponent},
  {path: 'projets/edit/:id', component: ProjetsEditComponent},

  {path: 'projets/ajouterprojets', component: ProjetsAddComponent},
  {path: 'evenements', component: EventComponent},
  {path: 'evenements/:id',component: EventDetailComponent},
  {path: 'evenements/edit/:id',component: EventEditComponent},
  {path: 'evenements/ajouterevenements/:activite', component: EventAddComponent},
  {path: 'institution', component: InstitutionComponent},
  {path: 'institution/add', component: InstitutionAddComponent }, 
  {path: 'institution/:id', component: InstitutionDetailComponent}, 
  {path: 'institution/edit/:id', component: InstitutionEditComponent },
  {path: 'rgDetail/:id', component: RgVersionService},
  {path: 'rg/marine', component: RgMarineComponent }, 
  {path: 'rg/marine/ajouter', component:RgMarineAddComponent},
  {path: 'rg/marine/:id', component:RgMarineDetailsComponent},
  {path: 'rg/foret', component: RgForetComponent }, 
  {path: 'rg/foret/ajouter', component: RgForetAddComponent},
  {path: 'rg/foret/:id', component: RgForetDetailsComponent},
  {path: 'rg/micro', component: RgMicroComponent }, 
  {path: 'rg/micro/ajouter',component:RgMicroAddComponent},
  {path: 'rg/micro/:id', component: RgMicroDetailsComponent},
  {path: 'rg/alimentaire', component: RgAlimentaireComponent },
  {path: 'rg/alimentaire/ajouter',component:RgAliemntaireAddComponent},
  {path: 'rg/alimentaire/:id', component: RgAlimentaireDetailsComponent}, 
  {path: 'rg/animale', component: RgAnimaleComponent }, 
  {path: 'rg/animale/ajouter',component:RgAnimaleAddComponent},
  {path: 'rg/animale/:id', component: RgAnimaleDetailsComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {path: 'admin/users',component:UsersComponent},

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
