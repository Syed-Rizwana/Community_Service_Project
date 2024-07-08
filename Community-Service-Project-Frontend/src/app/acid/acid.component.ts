import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-acid',
  templateUrl: './acid.component.html',
  styleUrls: ['./acid.component.css']
})
export class AcidComponent implements OnInit {
  username:string="";
  isDropdownOpen: boolean = false;
  constructor(private authService: AuthserviceService) {}
ngOnInit() {
  this.authService.username$.subscribe(username => {
    this.username = username; // Update the login username
  });
}
  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
}
