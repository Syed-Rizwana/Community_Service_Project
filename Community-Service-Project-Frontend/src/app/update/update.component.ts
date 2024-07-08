import { Component,OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import {
  InsertedSuccess,
  Read,
  Signup,
  share1,
  UniqueConstraintError,
} from '../crud';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnDestroy{
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  
 
    @ViewChild('myForm', { static: false }) myForm!: NgForm;
    constructor(private Service: CRUDService) { }
    ngOnInit() { }
    Subscription: Subscription = new Subscription();
    User: share1 = {
      title:'',
      name: '',
      email: '',
      story:''
    };
    SuccessMsg = '';
    ErrorMsg = '';
    Update() {       
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.update2(this.User.email, this.User).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          console.log(data.Result);
          alert("Updated Successfully");
          this.resetForm();
        } else {   
          console.log("Failed");
        }
      });
  }
   Delete() {
        this.ErrorMsg = '';
        this.SuccessMsg = '';
        this.Subscription = this.Service.Delete2(this.User.email).subscribe(
          (data) => {
            if (data) {
              console.log(data);
              alert("Deleted Successfully");
              this.resetForm();
  
            }
            else {
    
             console.log("Failed");}
          });
        }
        resetForm() {
          this.User = {
            title: '',
            name: '',
            email: '',
            story: ''
          };
          this.myForm.resetForm();
        }
  
        ngOnDestroy() {
          this.Subscription.unsubscribe();
        }
  }

