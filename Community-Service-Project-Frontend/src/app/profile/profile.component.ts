import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CRUDService } from '../crud.service'; 
import { Crud } from '../crud';
interface User {
  name: string;
  title: string[];
  Review: string[];
  shares: string[];
  loginDetails: LoginDetails;
}

interface LoginDetails {
  lastLogin: Date;
  loginCount: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    name: '',
    title: [],
    Review: [],
    shares: [],
    loginDetails: {
      lastLogin: new Date(),
      loginCount: 0,
    },
  };
  User:Crud={
    name: '',
    email: '',
    Review:'',
    Ratings:0


  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private crudService: CRUDService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const email = params['email'];

      // Make HTTP requests to fetch user data from different endpoints
      this.crudService.Read(this.User.email).subscribe(
        (userData:any) => {
          this.user.name = userData.name;
        },
        (error) => {
          console.log('Error fetching user data:', error);
        }
      );

      this.crudService.Read1(this.User.email).subscribe(
        (activitiesData:any) => {
          this.user.title = activitiesData;
        },
        (error) => {
          console.log('Error fetching activities data:', error);
        }
      );

      // Make similar requests for feedbacks and shares

      this.crudService.Read2(email).subscribe(
        (feedbacksData:any) => {
          this.user.Review = feedbacksData;
        },
        (error) => {
          console.log('Error fetching feedbacks data:', error);
        }
      );

      this.crudService.Read2(email).subscribe(
        (sharesData:any) => {
          this.user.shares = sharesData;
        },
        (error) => {
          console.log('Error fetching shares data:', error);
        }
      );

      // Fetch login details data from a separate endpoint
      this.crudService.Read4(email).subscribe(
        (loginDetailsData:any) => {
          this.user.loginDetails.lastLogin = new Date(loginDetailsData.lastLogin);
          this.user.loginDetails.loginCount = loginDetailsData.loginCount;
        },
        (error) => {
          console.log('Error fetching login details data:', error);
        }
      );
    });
  }
}



