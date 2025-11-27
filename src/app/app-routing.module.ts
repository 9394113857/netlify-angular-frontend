// ============================================================================
// EXPLANATION: WHAT HAPPENED HERE AND WHY THIS FILE WAS CHANGED
// ============================================================================
// Originally, the routing file was using Angular's functional guard (authGuard).
// But later, you generated a CLASS-BASED guard named "cactivateGuard"
// using CanActivate + LoginService + Router redirection.
//
// Because of this switch, the routing system needed to be updated:
//
// ✔ Removed old functional guard "authGuard"
// ✔ Added new class-based guard "cactivateGuard"
// ✔ Updated all routes to use canActivate: [cactivateGuard]
// ✔ Ensured correct import path for the new guard
//
// This version is the corrected + merged + final routing file.
// ============================================================================


// -------------------------------------------
// 1. Angular Router Core Imports
// -------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -------------------------------------------
// 2. Component Imports
// -------------------------------------------
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

// -------------------------------------------
// 3. Class-Based Auth Guard Import
// -------------------------------------------
// We now use the CLASS-BASED guard (implements CanActivate)
// instead of the functional guard.
import { cactivateGuard } from './cactivate.guard';

// -------------------------------------------
// 4. Route Definitions
// -------------------------------------------
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' // Redirect root → login
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [cactivateGuard] // Protected route
  },
  {
    path: 'login',
    component: LoginComponent // Public
  },
  {
    path: 'register',
    component: RegisterComponent // Public
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [cactivateGuard] // Protected route
  },
];

// -------------------------------------------
// 5. NgModule Wrapper for Routing
// -------------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
