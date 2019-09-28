import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PermisComponent } from './permis/permis.component';
import { DemandepermisComponent } from './demandepermis/demandepermis.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { InstitutionComponent } from './institution/institution.component';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { RgComponent } from './rg/rg.component';
import { RgMarineComponent } from './rg-marine/rg-marine.component';
import { RgAlimentaireComponent } from './rg-alimentaire/rg-alimentaire.component';
import { RgForetComponent } from './rg-foret/rg-foret.component';
import { RgAnimaleComponent } from './rg-animale/rg-animale.component';
import { RgMicroComponent } from './rg-micro/rg-micro.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InstitutionEditComponent } from './institution-edit/institution-edit.component';
import { InstitutionAddComponent } from './institution-add/institution-add.component';
import { RgAlimentaireDetailsComponent } from './rg-alimentaire-details/rg-alimentaire-details.component';
import { RgAnimaleDetailsComponent } from './rg-animale-details/rg-animale-details.component';
import { RgForetDetailsComponent } from './rg-foret-details/rg-foret-details.component';
import { RgMarineDetailsComponent } from './rg-marine-details/rg-marine-details.component';
import { RgMicroDetailsComponent } from './rg-micro-details/rg-micro-details.component';

import { AddUserComponent } from './users/add-user/add-user.component'
import { DeleteUserComponent } from './users/delete-user/delete-user.component'
import { UsersComponent } from './users/users.component';
import { LoadingComponent } from './loading/loading.component';
import { RgAliemntaireAddComponent } from './rg-aliemntaire-add/rg-aliemntaire-add.component';
import { RgMarineAddComponent } from './rg-marine-add/rg-marine-add.component';
import { RgForetAddComponent } from './rg-foret-add/rg-foret-add.component';
import { RgMicroAddComponent } from './rg-micro-add/rg-micro-add.component';
import { RgAnimaleAddComponent } from './rg-animale-add/rg-animale-add.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { AdminModule } from './admin/admin.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import {EventAddComponent} from './event-add/event-add.component';
import { ProjetsAddComponent } from './projets-add/projets-add.component';
import { ProjetsDetailComponent } from './projets-detail/projets-detail.component';
import { ProjetsEditComponent } from './projets-edit/projets-edit.component';
import { RgVersionComponent } from './rg-version/rg-version.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PermisComponent,
    DemandepermisComponent,
    ContactComponent,
    ProjetsComponent,
    EventComponent,
    EventAddComponent,
    AdminComponent,
    InstitutionComponent,
    InstitutionDetailComponent,
    RgComponent,
    RgMarineComponent,
    RgAlimentaireComponent,
    RgForetComponent,
    RgAnimaleComponent,
    RgMicroComponent,
    InstitutionEditComponent,
    InstitutionAddComponent,
    RgAlimentaireDetailsComponent,
    RgAnimaleDetailsComponent,
    RgForetDetailsComponent,
    RgMarineDetailsComponent,
    RgMicroDetailsComponent,
    UsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    LoadingComponent,
    RgAliemntaireAddComponent,
    RgMarineAddComponent,
    RgForetAddComponent,
    RgMicroAddComponent,
    RgAnimaleAddComponent,
    EventDetailComponent,
    EventEditComponent,
    ProjetsAddComponent,
    ProjetsDetailComponent,
    ProjetsEditComponent,
    RgVersionComponent,
   
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
