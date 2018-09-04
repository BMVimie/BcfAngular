import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import routes
import { Routes, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';

// services
import {AuthService} from './services/auth.service'
import {AuthGuard} from './services/auth-guard.service'

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AllProjectsPageComponent } from './all-projects-page/all-projects-page.component';
import { OneProjectPageComponent } from './one-project-page/one-project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { ExplanationPageComponent } from './explanation-page/explanation-page.component';
import { LegalNoticePageComponent } from './legal-notice-page/legal-notice-page.component';
import { AdvicesPageComponent } from './advices-page/advices-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';

// define all routes links
const appRoutes=[
  { path: 'home' , component: WelcomePageComponent },
  { path: 'explanation' , component: ExplanationPageComponent },
  { path: 'privacy' , component: PrivacyPolicyPageComponent },
  { path: 'advices' , component: AdvicesPageComponent },
  { path: 'rules' , component: RulesPageComponent },
  { path: 'allprojects' , component: AllProjectsPageComponent },
  { path: 'allprojects/):id', component: AllProjectsPageComponent },
  { path: 'createproject' , canActivate: [AuthGuard], component: CreateProjectPageComponent },
  { path: 'oneproject' , component: OneProjectPageComponent },
  { path: 'contact' , component: ContactPageComponent },
  { path: 'connexion' , component: ConnexionPageComponent },
  { path: 'legalnotice' , component: LegalNoticePageComponent },
  { path: '' , component: WelcomePageComponent }, // path :'' define welcome page
  { path: '**' , component: WelcomePageComponent } // if weird url '**' // put it everytime to end of the list (to not use iti first)
];


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    WelcomePageComponent,
    AllProjectsPageComponent,
    OneProjectPageComponent,
    ContactPageComponent,
    ConnexionPageComponent,
    CreateProjectPageComponent,
    ExplanationPageComponent,
    LegalNoticePageComponent,
    AdvicesPageComponent,
    PrivacyPolicyPageComponent,
    RulesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // add routes in imports
    FormsModule // add forms module in imports
  ],
  providers: [
     // services imported
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
