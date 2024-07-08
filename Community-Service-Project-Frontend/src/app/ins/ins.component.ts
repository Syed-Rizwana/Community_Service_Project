import { Component,OnDestroy,OnInit} from '@angular/core';
import { CRUDService } from '../crud.service';

import { Subscription } from 'rxjs';
import { InsertedSuccess } from '../crud';


import { Inspiration } from '../crud';
import { UniqueConstraintError } from '../crud';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent implements OnDestroy,OnInit{
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
  
  
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User:Inspiration = {
    name: '',
    your_ins: '',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert4(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
   
  }
  
  deletedMsg=''
  errorMsg=''
  Delete() {
    alert('Deleting...');
    this.deletedMsg = '';
    this.errorMsg = '';
  
    this.Subscription = this.Service.Delete4(this.User.name).subscribe({
      next: () => {
        this.deletedMsg = `Deleted Successfully`;
        console.log(`Deleted values: name=${this.User.name}, your_ins=${this.User.your_ins}`);
      },
      error: (error: any) => {
        this.errorMsg = `Error occurred while deleting: ${error}`;
        console.log(error);
      },
    });
  }
  
  updatedMsg='';
  Update() {
    alert('updated successfully!!!');
    this.ErrorMsg = '';
    this.updatedMsg = '';
      
    const Data = {
      name: this.User.name,
      your_ins: this.User.your_ins
     
    };
      
    this.Subscription = this.Service.Update4(this.User.name,Data).subscribe({
      next: (data: any) => {
        console.log(`Updated values: name=${this.User.name}, your_ins=${this.User.your_ins}`);
        this.updatedMsg = `Updated data for name ${this.User.name} successfully`;
      },
      error: (error: any) => {
        console.log(error);
        this.ErrorMsg = '';
      }
    });
  }
  
  Read() {
    // alert('Deleting...');
    this.SuccessMsg = '';
    this.errorMsg = '';
  
    this.Subscription = this.Service.Read4(this.User.name).subscribe({
      next: (Data) => {
        // this.SuccessMsg = `Read Successfully`; 
        this.readData = Data.Result; 
        console.log(this.readData);
        // console.log(`Deleted values: name=${this.User.name}, your_ins=${this.User.your_ins}`);
      },
      error: (error: any) => {
        this.errorMsg = `Error occurred while deleting: ${error}`;
        console.log(error);
      },
    });
  }

  onReadClick() {
    this.isReadClicked = true;
    this.Read();
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  

}
