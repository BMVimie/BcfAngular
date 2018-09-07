import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// routes
import { RouterModule} from '@angular/router'

// services
import {AuthService} from './services/auth.service'
import {AuthGuard} from './services/auth-guard.service'
import { HttpService } from './services/http.service';

// HTTP
import { HttpClientModule } from '@angular/common/http';

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
import { AccountPageComponent } from './account-page/account-page.component';

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
  { path: 'account', component: AccountPageComponent },
  { path: '' , component: WelcomePageComponent }, // path :'' define welcome page
  { path: '**' , component: WelcomePageComponent } // if weird url '**' // put it everytime to end of the list (to not use iti first)
];


@NgModule({
  declarations: [
    // all components
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
    RulesPageComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // add routes in imports
    FormsModule, // add forms module in imports
    HttpClientModule // for HTTP request
  ],
  providers: [
     // services imported
    AuthService, // authentification redirection
    AuthGuard, // authentification redirection
    HttpService // for HTTP request
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
