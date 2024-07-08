import { Component } from '@angular/core';
import {
  InsertedSuccess,
  FormDetails,
  UniqueConstraintError,
  Read
} from '../crud';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 // isDropdownOpen: boolean = false;

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
    constructor(private Service: CRUDService,private authService:AuthserviceService) {}
   
    Subscription: Subscription = new Subscription();
    User: FormDetails = {
      Section: '',
      Domain: '',
      About: '',
      Reference: '' 
    };  
    ngOnInit() {
      this.authService.username$.subscribe(username => {
        this.username = username; // Update the login username
      });
    }
    d = [];  
    tableMatch = 0;  
    ihide = true;
    bhide = true;
    uhide = true;
    rhide = true;
    visi = false; 
    reset(){
     this.User={
        Section:'',
        Domain:'',
        About:'',
        Reference:''
      }
    }
    inst(){
      this.visi = false;
      this.ihide = false;
      this.rhide = true;
      this.uhide = true;
      this.bhide = true;
      this.tableMatch = 0;
      this.reset()
    }  
    delt(){ 
      this.visi = true;
      this.ihide = true;
      this.rhide = true;
      this.uhide = true;
      this.bhide = false;
      this.tableMatch = 0;
      this.reset()
    }
    updt(){
      this.visi = false;
      this.ihide = true;
      this.bhide = true; 
      this.rhide = true;
      this.uhide = false;
      this.tableMatch = 0;
      this.reset()
    } 
    retv(){
      this.visi = true;
      this.ihide = true;
      this.bhide = true;
      this.uhide = true;
      this.rhide = false;
      this.tableMatch = 0;
      this.reset()
    }
    SuccessMsg = '';
    ErrorMsg = '';
    Insert() {
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Insert1(this.User).subscribe({
        next: (Data: InsertedSuccess | UniqueConstraintError) => {
          if ('errorNum'in Data) {
            this.ErrorMsg = `${this.User.Section} already exists`;
          } else {
            this.SuccessMsg = `${this.User.Section} Inserted Successfully`;
          }
        },
        error: (Error) => {
          console.log(Error);
        },
      });
    }
    
    Delete() { 
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Delete1(this.User.Section).subscribe({
        next: (Data: InsertedSuccess | UniqueConstraintError) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.Section} not Exists`;
          } else {
            this.SuccessMsg = `${this.User.Section} Deleted Succesfully`;
          }
        },
        error: (Error) => {
          console.log(Error);
        },
      });
    } 
    Get(){
      this.Subscription = this.Service.Read1(this.User.Section).subscribe({
        next: (Data: Read) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.Section} not Exists`;
          } else {
            // console.log(Data.Result);  
            this.d = Data.Result;  
            this.User.Domain = this.d[0][1];
            this.User.About = this.d[0][2];
            this.User.Reference = this.d[0][3];
            // console.log(this.d)
          }
        },
        error: (Error) => {
          console.log(Error);
        },
      });
    }
    Update() {
      this.SuccessMsg = '';
      this.ErrorMsg = '';
        
      const Data = {
        Section: this.User.Section,
        Domain: this.User.Domain,
        About: this.User.About,
        Reference: this.User.Reference
      };
        
      this.Subscription = this.Service.Update1(this.User.Section,Data).subscribe({
        next: (data: any) => {
          console.log(`Updated values: Section=${this.User.Section}, Domain=${this.User.Domain},About=${this.User.About},Reference=${this.User.Reference}`);
          this.SuccessMsg = `Updated data for Section ${this.User.Section} successfully`;
        },
        error: (error: any) => {
          console.log(error)
          this.ErrorMsg = '';
        }
      })
    };
    // Update(Section: String, Details: FormDetails) { 
    //   this.ErrorMsg = '';
    //   this.SuccessMsg = '';
    //   this.Subscription = this.Service.Update(Section,Details).subscribe({
    //     next: (Data) => {
    //       if ('errorNum' in Data) {
    //         this.ErrorMsg = `${this.User.Section} not Exists`;
    //       } else {
    //         this.SuccessMsg = `${this.User.Section} Updated Succesfully`;
    //       }
    //     },
    //     error: (Error) => {
    //       console.log(Error);
    //     },
    //   });
    // }
    Read() { 
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Read1(this.User.Section).subscribe({
        next: (Data: Read) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.Section} not Exists`;
          } else {
            // console.log(Data.Result);  
            this.tableMatch = 1;
            this.d = Data.Result; 
            // console.log(this.d)
          }
        },
        error: (Error) => {
          console.log(Error);
        },
      });
    }
    editData(data: any) {
      this.User.Section = data[0];
      this.User.Domain = data[1];
      this.User.About = data[2];
      this.User.Reference = data[3];
      this.visi = false;
      this.uhide = true;
    }
  
    cancelUpdate() {
      this.reset();
      this.uhide = true;
    }
    ngOnDestroy() {
      this.Subscription.unsubscribe();
    }
  }