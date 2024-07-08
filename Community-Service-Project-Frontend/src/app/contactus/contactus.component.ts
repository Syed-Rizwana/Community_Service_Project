import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import {
  InsertedSuccess,
  FormDetails,
  UniqueConstraintError,
  contact,
  Read
} from '../crud';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  username:string="";
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
  
  //constructor(private authService: AuthserviceService) {}
ngOnInit() {
  this.authService.username$.subscribe(username => {
    this.username = username; // Update the login username
  });
}
  User: contact = {
    name: '',
    email: '',
    message:''
  };
  Subscription: Subscription = new Subscription();
 constructor(private Service:CRUDService,private authService:AuthserviceService){}
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

   
    this.Subscription = this.Service.Insert3(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
         // this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    
  }
}
