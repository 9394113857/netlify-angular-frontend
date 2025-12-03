// ----------------------------------------------------------
// Register Component - FINAL VERSION
// ----------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert('Please fill required fields');
      return;
    }

    const f = this.registerForm.value;

    this.loginService.register(
      f.username!,
      f.password!,
      f.name ?? undefined,
      f.email ?? undefined,
      f.phone ?? undefined,
      f.address ?? undefined
    ).subscribe({
      next: (response) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('Registration ERROR:', error);
        alert(error.error?.message || 'Registration failed');
      }
    });
  }
}
