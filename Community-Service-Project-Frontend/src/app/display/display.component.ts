import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  signupForm!: FormGroup;
  isSignupFormVisible: boolean = false;

  form!: FormGroup;
  submitted: boolean = false;
  

 
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone:['',Validators.required]
    });
  }
  showNavbar: boolean = false;
  toggleSignupForm() {
   
      this.router.navigate(['/signup']);
      // You can also reset the form if needed
      // this.signupForm.reset();
   

  }
  Form() {
   
    this.router.navigate(['/login']);
    // You can also reset the form if needed
    // this.signupForm.reset();
 

}
  flipQuotationCard(event: MouseEvent) {
    const quotationCard = event.currentTarget as HTMLElement;
    quotationCard.classList.toggle('flip');
  }
  onSignInClick() {
    // Perform sign-in logic
    this.showNavbar = true;
    this.router.navigate(['/home']);
  }
  submitForm() {
    if (this.signupForm.valid) {
      // Perform form submission logic
      console.log('Form submitted successfully');
      this.router.navigate(['/home']);
      // You can also reset the form if needed
      // this.signupForm.reset();
    } else {
      // Mark the form controls as touched to display validation errors
      this.signupForm.markAllAsTouched();
    }
  }
   
  

  isRegistrationFormVisible: boolean = false;

  toggleRegistrationForm() {
    this.isRegistrationFormVisible = !this.isRegistrationFormVisible;
  }
}
