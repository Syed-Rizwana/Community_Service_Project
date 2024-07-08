import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changed';
  showNavbar: boolean = false;
  home: string = '/home';

  form!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  
 
  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      alert('sign up succesful');
      this.showNavbar = true;
    this.router.navigate([`${this.home}`]);
  }
}
onSignInClick() {
  this.submitted = true;
  if (this.form.valid) {
 
    this.showNavbar = true;
  this.router.navigate(['/home']);
}
}

  isRegistrationFormVisible: boolean = false;

  toggleRegistrationForm() {
    this.isRegistrationFormVisible = !this.isRegistrationFormVisible;
  }
}
