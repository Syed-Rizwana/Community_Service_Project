import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

isDropdownOpen: boolean = false;

openDropdown(event: MouseEvent) {
  this.isDropdownOpen = true;
}

closeDropdown(event: MouseEvent) {
  this.isDropdownOpen = false;
}

}
