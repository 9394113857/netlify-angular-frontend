// -------------------------
// 1. Angular Core + Browser
// -------------------------
// BrowserModule must ALWAYS be first in Angular browser apps
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ---------------------------------------------------
// 2. CommonModule → fixes ngIf, ngFor, ngSwitch errors
// ---------------------------------------------------
// Without this, Angular throws:
// "Can't bind to ngSwitch since it isn't a known property"
import { CommonModule } from '@angular/common';

// ---------------------------------------------------
// 3. RouterModule → required for <router-outlet>
// ---------------------------------------------------
// Without this, Angular throws:
// "'router-outlet' is not a known element"
import { RouterModule } from '@angular/router';

// ---------------------------------------------------
// 4. HttpClientModule → required for API calls
// ---------------------------------------------------
// Without this, Angular throws:
// "Cannot find name 'HttpClientModule'"
import { HttpClientModule } from '@angular/common/http';

// ---------------------------------------------------
// 5. Forms Modules (Template + Reactive forms)
// ---------------------------------------------------
// FormsModule → for ngModel
// ReactiveFormsModule → for FormGroup, FormControl
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ---------------------------------------------------
// 6. Application Routing Module
// ---------------------------------------------------
import { AppRoutingModule } from './app-routing.module';

// ---------------------------------------------------
// 7. Components (Declare all components here)
// ---------------------------------------------------
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ProfileComponent } from './components/profile/profile.component';


// -------------------------
// 8. @NgModule Declaration
// -------------------------
@NgModule({
  
  // All components that belong to THIS module
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],

  // All modules imported into THIS module
  imports: [
    BrowserModule,        // Must always be first
    CommonModule,         // Fixes ngSwitch/ngIf/ngFor errors
    FormsModule,          // For template-driven forms
    ReactiveFormsModule,  // For reactive forms
    HttpClientModule,     // For API calls
    RouterModule,         // Needed for router-outlet
    AppRoutingModule      // Contains route definitions
  ],

  providers: [],

  // Which component Angular should load first
  bootstrap: [AppComponent]
})
export class AppModule { }
