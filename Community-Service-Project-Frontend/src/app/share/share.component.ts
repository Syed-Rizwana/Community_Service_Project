import { Component } from '@angular/core';
import {
  InsertedSuccess,
  Read,
  Signup,
  share1,
  UniqueConstraintError,
} from '../crud';
import { NgForm } from '@angular/forms';
import { CRUDService } from '../crud.service';
import { AuthserviceService } from '../authservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  isDropdownOpen: boolean = false;
  isReadClicked: boolean = false;
  isComplaintDropdownOpen:boolean=false;
  isInspirationsDropdownOpen:boolean=false;
  readData: any;
  openDropdown(event: MouseEvent, dropdownType: string) {
    if (dropdownType === 'complaint') {
      this.isComplaintDropdownOpen = true;
    } else if (dropdownType === 'ins') {
      this.isInspirationsDropdownOpen = true;
    }
  }
  
  closeDropdown(event: MouseEvent, dropdownType: string) {
    if (dropdownType === 'complaint') {
      this.isComplaintDropdownOpen = false;
    } else if (dropdownType === 'ins') {
      this.isInspirationsDropdownOpen = false;
    }
  }
  
  username:string="";
  isFormDeleted: boolean = false;
  constructor(private Service: CRUDService,private authService:AuthserviceService) { }
  ngOnInit() {
    this.authService.username$.subscribe(username => {
      this.username = username; // Update the login username
    });
  }
  Subscription: Subscription = new Subscription();
  User: share1 = {
    title: '',
    name: '',
    email: '',
    story:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  canshow='';
  a = [];
  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert2(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} already Exists`;
        }
        else {
          this.SuccessMsg = `${this.User.story}Inserted Successfully`;
          alert("Inserted Successfully");
          Form.reset();
        }
      }
    });

  }
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
