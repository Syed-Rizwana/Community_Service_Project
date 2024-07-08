import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit {
  Im:string;
  I:string;
  Ig:string;

  constructor() {
    this.Im='https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/08/20/Incoming/Pictures/mitali-madhumita_95b72e38-4770-11e5-a8da-005056b4648e.jpg'
    this.I='https://imagevars.gulfnews.com/2020/06/08/Ennis-Kanmani-Joy_17294510105_medium.jpg'
this.Ig='https://www.thenewsminute.com/sites/default/files/Beela-rajesh.jpg'


   }

  ngOnInit() {
  }

}