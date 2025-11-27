// ============================================================================
// EXPLANATION: WHAT THIS FILE DOES
// ============================================================================
// This is the main Angular Module of your application.
// It determines:
//  - Which COMPONENTS are part of the app
//  - Which MODULES Angular needs to import (forms, routing, HTTP, etc.)
//  - Which component should BOOTSTRAP first (AppComponent)
//  
// This final version includes:
//  ✔ Full CommonModule support (fixes ngIf/ngFor/ngSwitch errors)
//  ✔ RouterModule support (fixes router-outlet errors)
//  ✔ HttpClientModule (required for API calls)
//  ✔ Forms + ReactiveForms
//  ✔ Clean imports, correct order, safe for production
// ============================================================================


// -------------------------
// 1. Angular Core + Browser
// -------------------------
// BrowserModule must ALWAYS be first in Angular browser apps.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ---------------------------------------------------
// 2. CommonModule → Required for structural directives
// ---------------------------------------------------
// This fixes errors like:
// "Can't bind to ngSwitch since it isn't a known property"
import { CommonModule } from '@angular/common';

// ---------------------------------------------------
// 3. RouterModule → Required for routing system
// ---------------------------------------------------
// Without this, Angular throws:
// "'router-outlet' is not a known element"
import { RouterModule } from '@angular/router';

// ---------------------------------------------------
// 4. HttpClientModule → Required for backend API calls
// ---------------------------------------------------
// Without this, Angular throws:
// "Cannot find name 'HttpClientModule'"
import { HttpClientModule } from '@angular/common/http';

// ---------------------------------------------------
// 5. Forms & ReactiveForms Modules
// ---------------------------------------------------
// FormsModule → Template-driven forms (ngModel)
// ReactiveFormsModule → FormGroup, FormControl
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ---------------------------------------------------
// 6. Application Routing Module (contains defined routes)
// ---------------------------------------------------
import { AppRoutingModule } from './app-routing.module';

// ---------------------------------------------------
// 7. Application Components
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
  // All components used inside this module
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],

  // External modules imported into this module
  imports: [
    BrowserModule,        // Must always be first
    CommonModule,         // Enables ngSwitch/ngIf/ngFor
    FormsModule,          // For template-driven forms
    ReactiveFormsModule,  // For reactive forms
    HttpClientModule,     // For API communication
    RouterModule,         // Enables routing system
    AppRoutingModule      // Loads all routes
  ],

  providers: [],

  // Main component that Angular boots first
  bootstrap: [AppComponent]
})
export class AppModule { }
