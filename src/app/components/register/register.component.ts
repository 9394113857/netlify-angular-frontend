import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Form group with all required fields for registration
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl(''),  // optional field
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  // On form submit, gather all form values and call register service method
  /**
   * Handles the registration form submission.
   * 
   * This method retrieves the form values and calls the `register` method of the `loginService`.
   * It explicitly converts any `null` values in optional fields (name, email, phone, address) to `undefined`
   * using the nullish coalescing operator (`?? undefined`). This ensures that the parameters match the expected
   * types of the `register` method, which requires `undefined` for omitted optional values instead of `null`.
   * 
   * On successful registration, the user is alerted and redirected to the login page.
   * On failure, an error alert is shown.
   */
  onSubmit(): void {
    const formValue = this.registerForm.value;
    this.loginService.register(
  formValue.username!,
  formValue.password!,
  formValue.name ?? undefined, 
  formValue.email ?? undefined,
  formValue.phone ?? undefined,
  formValue.address ?? undefined
).subscribe( // This converts null to undefined, which matches the parameter type.

      // Handle successful registration
      response => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Registration failed');
      }
    );
  }


}
