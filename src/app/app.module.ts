import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import angular material library
import {MatDialogModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import router module to build routes
import { RouterModule } from '@angular/router';

// import our services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { HttpService } from './services/http.service';

// import HTTP client
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
// import Cookie service
import { CookieService } from 'ngx-cookie-service';

// import components
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AllProjectsPageComponent } from './all-projects-page/all-projects-page.component';
import { OneProjectPageComponent } from './one-project-page/one-project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { ExplanationPageComponent } from './explanation-page/explanation-page.component';
import { LegalNoticePageComponent } from './legal-notice-page/legal-notice-page.component';
import { AdvicesPageComponent } from './advices-page/advices-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginComponent } from './page-header/page-header.component';
import { PasswordComponent } from './page-header/page-header.component';

// define all routes links
const appRoutes = [
  { path: 'home', component: WelcomePageComponent },
  { path: 'explanation', component: ExplanationPageComponent },
  { path: 'privacy', component: PrivacyPolicyPageComponent },
  { path: 'advices', component: AdvicesPageComponent },
  { path: 'rules', component: RulesPageComponent },
  { path: 'projects', component: AllProjectsPageComponent },
  { path: 'createproject', component: CreateProjectPageComponent },
  { path: 'project/:id/:projectname', component: OneProjectPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'legalnotice', component: LegalNoticePageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', component: WelcomePageComponent }, // path :'' define welcome page
  { path: '**', component: WelcomePageComponent } // if weird url '**' // put it everytime to end of the list (to not use iti first)
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
    CreateProjectPageComponent,
    ExplanationPageComponent,
    LegalNoticePageComponent,
    AdvicesPageComponent,
    PrivacyPolicyPageComponent,
    RulesPageComponent,
    AccountPageComponent,
    RegisterPageComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // add forms module in imports
    RouterModule.forRoot(appRoutes), // add routes in imports
    HttpClientModule, // for HTTP request
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,  
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  entryComponents: [
    LoginComponent,
    PasswordComponent,
    PageHeaderComponent
  ],  
  providers: [
    // services imported
    AuthService, // authentification redirection
    AuthGuard, // authentification redirection
    HttpService, // for HTTP request
    CookieService, // for use cookie
    HttpClientXsrfModule // for use csrf token (authentification)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
