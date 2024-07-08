import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Read,
  Signup,
  share1,
  UniqueConstraintError,
} from '../crud';
import { NgForm } from '@angular/forms';
import { CRUDService } from '../crud.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) { }
  ngOnInit():void { }
  Subscription: Subscription = new Subscription();
  User: share1 = {
    title:'',
    name: '',
    email: '',
    story:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a = [];
  Read() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Read2(this.User.email).subscribe(
      (data:any) => {
        if (data) {
          // alert("read Successfully")
          // document.write("Read Successfully");
          console.log(data);
          console.log(data.Result);;
          this.a = data.Result[0];
          console.log(this.a);

        }
        else {

          console.log("Failed");
        }
      }
    );
}

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}