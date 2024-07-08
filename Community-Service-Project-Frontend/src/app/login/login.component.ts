import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  InsertedSuccess,
  FormDetails,
  login,
  UniqueConstraintError,
  Read
} from '../crud';
import { AuthserviceService } from '../authservice.service';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import { SignupService } from '../signup.service';
interface UserData {
  email: string;
  password: string;
  // Add other properties as needed
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  feedbackForm!: FormGroup;

  submitted: boolean = false;
sus=true;
  constructor(private formBuilder: FormBuilder,private router:Router,private authService: AuthserviceService,private Service:SignupService) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    
  // navigateToProfile(email: string) {
  //   this.router.navigate(['/profile', email]);
  // }
  }


 
    // constructor(private Service: ServService) {}
   
    Subscription: Subscription = new Subscription();
    User: login = {
      email: '',
      password: ''
    };  
    d = []; 
    emails = '';
    SuccessMsg = '';
    ErrorMsg = ''; 
    username: String = "";
 
    oper(){
      const pass = this.User.password; 
        const cred = this.d[0][2];  
        console.log(cred);
        if(pass==cred){ 
          // this.SuccessMsg = "Login Successful";
         
          this.Subscription = this.Service.Insert2(this.User).subscribe({
          next: (Data: InsertedSuccess | UniqueConstraintError) => {  
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.email} alredy Exists`; 
          } else {   
            this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
            this.router.navigate(['/home']);
            }
        },
        error: (Error) => {
          console.log(Error);
        }, 
      });
    } 
    else{
      this.ErrorMsg = "Enter Correct Password" ; 
      // throw Error;
      
    }
    }
    Insert() {  
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      
        this.Read();  
        const emailParts: string[] = this.User.email.split('@');
  const username: string = emailParts[0]; 
  this.authService.setUsername(username);
       
            }

 
    Read() { 
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Read(this.User.email).subscribe({
         next: (Data: Read) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.email} not Exists`;
            alert(this.ErrorMsg);
          } else {
            // console.log(Data.Result);    
            this.d = Data.Result;  
            this.oper();
     
         
            // console.log(this.d); 
            
           // this.router.navigate(['/home']);
             
          }  
        },
        error: (Error) => {
          console.log(Error);
        },
      }); 
    }
  
  //   validateForm() {
  //   this.submitted = true;
  //   if (this.feedbackForm.invalid) {
    
  //     return;
  //   }
  //   this.Insert();
  //   // this.router.navigate(['/home']);
   
  //   console.log('Form submitted successfully');
  // }
    ngOnDestroy() {
      this.Subscription.unsubscribe();
    }
  }


