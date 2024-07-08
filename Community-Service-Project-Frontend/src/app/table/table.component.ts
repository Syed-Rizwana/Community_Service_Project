import { Component } from '@angular/core';
import {
  InsertedSuccess,
  FormDetails,
  UniqueConstraintError,
  Read
} from '../crud';
import { Subscription } from 'rxjs';
import { CRUDService} from '../crud.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  i: any; 
  constructor(private Service: CRUDService) {}
  // ngOnInit(): void {
  //   this.ReadAll('All');
  // }
  Subscription: Subscription = new Subscription();
  User: FormDetails = {
    Section: '',
    Domain: '',
    About: '',
    Reference: '' 
  };  
  d = [];  
  d1 = [];   
  d2 = [];
  match = false;
  match1 = false;
  status = false;
  SuccessMsg = '';
  ErrorMsg = '';
  close(){ 
    this.match = false;
    this.match1 = false;
    // console.log("Close");
  }
  ReadAll(Detail:String) { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Read1(Detail).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Section} not Exists`;
        } else {
          this.d = Data.Result;  
          console.log(this.d);
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }  
  Get(i:any){
    const Section = i[0];
    this.Subscription = this.Service.Read1(Section).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Section} not Exists`;
        } else {
          // console.log(Data.Result);  
          this.status = true;
          this.match1 = true;  
          this.d2 = Data.Result;    
          // console.log(this.d2);
          this.User.Section = this.d2[0][0];
          this.User.Domain = this.d2[0][1];
          this.User.About = this.d2[0][2];
          this.User.Reference = this.d2[0][3];
          // console.log(this.d)
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Update(){
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
          this.close();
          this.ReadAll('All');
        },
        error: (error: any) => {
          console.log(error)
          this.ErrorMsg = '';
        }
      })
  }
  
  Read(i:any) {  
    const Section = i[0];
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Read1(Section).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Section} not Exists`;
        } else {
          // console.log(Data.Result); 
          this.status = true;
          this.match = true;  
          this.d1 = Data.Result; 
          console.log(this.d1)
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}