// -------------------------------------------
// 1. Angular Router Core Imports
// -------------------------------------------
// RouterModule & Routes are required for defining paths and navigation.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -------------------------------------------
// 2. Component Imports
// -------------------------------------------
// These are the components each route will display.
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

// -------------------------------------------
// 3. Auth Guard Import (Functional Guard)
// -------------------------------------------
// Angular 16+ uses functional guards instead of class-based guards.
// This guard will be used in canActivate to protect routes.
import { authGuard } from './guards/auth.guard';

// -------------------------------------------
// 4. Route Definitions
// -------------------------------------------
// Notes:
// - Routes map URLs to components.
// - Redirect '' → '/login' means: open login page by default.
// - canActivate: [authGuard] blocks unauthorized users.
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' // Prevents partial matches
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard] // Protect home route
  },
  {
    path: 'login',
    component: LoginComponent // Public route
  },
  {
    path: 'register',
    component: RegisterComponent // Public route
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard] // Protect profile route
  },
];

// -------------------------------------------
// 5. NgModule Wrapper for Routing
// -------------------------------------------
// RouterModule.forRoot(routes) registers all routes in the application.
// Exporting RouterModule allows routerLink, router-outlet, etc., to work.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
