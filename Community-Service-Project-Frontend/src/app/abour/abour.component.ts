import { Component ,OnInit} from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-abour',
  templateUrl: './abour.component.html',
  styleUrls: ['./abour.component.css']
})
export class AbourComponent implements OnInit{
  isDropdownOpen: boolean = false;
  isInspirationsDropdownOpen:boolean=false;
  isComplaintDropdownOpen:boolean=false;

  username:string="";
  constructor(private authService: AuthserviceService) {}
  ngOnInit() {
    this.authService.username$.subscribe(username => {
      this.username = username; // Update the login username
    });
  }
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
  surveyImages: string[] = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];
}
