import { Component,OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
 // isDropdownOpen: boolean = false;
username:string="";
isDropdownOpen: boolean = false;
isReadClicked: boolean = false;
isComplaintDropdownOpen:boolean=false;
isInspirationsDropdownOpen:boolean=false;
readData: any;
openDropdown(event: MouseEvent, dropdownType: string) {
  if (dropdownType === 'stories') {
    this.isComplaintDropdownOpen = true;
  } else if (dropdownType === 'ins') {
    this.isInspirationsDropdownOpen = true;
  }
}

closeDropdown(event: MouseEvent, dropdownType: string) {
  if (dropdownType === 'stories') {
    this.isComplaintDropdownOpen = false;
  } else if (dropdownType === 'ins') {
    this.isInspirationsDropdownOpen = false;
  }
}

  constructor(private authService:AuthserviceService){}
  ngOnInit() {
    this.authService.username$.subscribe(username => {
      this.username = username; // Update the login username
    });
  }
  currentIndex = 0;
  totalStories = 3; // Update this value with the actual total number of stories

  previousStory() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.totalStories - 1;
    }
  }

  nextStory() {
    this.currentIndex++;
    if (this.currentIndex >= this.totalStories) {
      this.currentIndex = 0;
    }
  } 
 
}

