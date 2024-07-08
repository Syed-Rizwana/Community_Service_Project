
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
declare const $: any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';

  sliderImages: string[] = [
   'https://media.istockphoto.com/id/887538464/photo/purple-ribbon-against-the-violence-against-women.jpg?s=612x612&w=0&k=20&c=KTAnKFDXSPDQ7aO9I8ueH9MPUfJFuq4Yhz0v0vMsoos=',
    'https://asiapacific.unwomen.org/sites/default/files/2022-07/From%20Awareness%20Raising%20to%20Fostering%20Behaviour.jpg',
    'https://globalgoalscms.co.uk/wp-content/uploads/2022/04/Screenshot-2022-04-04-at-13.03.25.png',
    'https://i0.wp.com/www.orissapost.com/wp-content/uploads/2019/12/bsm8.jpg?fit=1280%2C720&ssl=1',
    'https://static.toiimg.com/thumb/msid-88939578,width-1070,height-580,imgsize-64858,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'

  
  ];
  ngAfterViewInit() {
    $(document).ready(() => {
      $('.carousel').carousel({
        interval: 5000, 
      });
    });
  }
  userLoggedIn: boolean = false;

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

constructor(private authService: AuthserviceService,private router:Router) {}
ngOnInit() {
  this.authService.username$.subscribe(username => {
    this.username = username; 
  });
 
}

redirectToInstructions() {
  this.router.navigate(['/instructions']);
}
// checkUserLoggedIn(): void {
  
//   if (this.userLoggedIn) {

//     const popupContainer = document.getElementById('popupContainer') as HTMLElement;
//     popupContainer.style.display = 'block';
//     console.log('popup')
//     setTimeout(() => {
//       this.closePopup();
//     }, 3000);
//   }
  

//   }
//   closePopup(): void {
//     const popupContainer = document.getElementById('popupContainer') as HTMLElement;
//     popupContainer.style.display = 'none';
    
//   }
}
