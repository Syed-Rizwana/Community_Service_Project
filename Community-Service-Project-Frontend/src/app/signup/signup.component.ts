import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import {
  InsertedSuccess,
  Read,
  Signup,
  UniqueConstraintError,
} from '../crud';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private Service:SignupService,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }


  User: Signup = {
    username: '',
    email: '',
    password:'',
    confirm:'',
    gender:'',
    phone:0
  };
  Subscription: Subscription = new Subscription();
 
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

   
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
         // this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `Inserted Succesfully`;
          this.router.navigate(['/login'])
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    
  }
  submitForm() {
    this.submitted = true;

    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      if (Object.values(formData).some(val => !val)) {
        this.ErrorMsg = 'Please fill in all the fields.';
      } else {
      
        this.SuccessMsg = 'Signup successful!';
        this.Insert();
        this.router.navigate(['/login']); 
      }
    } else {
      this.ErrorMsg = 'Please fix all form errors.';
    }
  }
}
