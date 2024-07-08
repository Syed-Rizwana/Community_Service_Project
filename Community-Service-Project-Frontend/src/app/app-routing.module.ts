import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InsComponent } from './ins/ins.component';
import { ActsComponent } from './acts/acts.component';
import { AbourComponent } from './abour/abour.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesComponent } from './stories/stories.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdateComponent } from './update/update.component';
import { DvComponent } from 'src/app/dv/dv.component';
import { DowryComponent } from './dowry/dowry.component';
import { AcidComponent } from './acid/acid.component';
import { ShComponent } from './sh/sh.component';
//import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ShareComponent } from './share/share.component';
import { ReadComponent } from './read/read.component';
import { OfficersComponent } from './officers/officers.component';
import { VictimsComponent } from './victims/victims.component';
import { ProfileComponent } from './profile/profile.component';
import { InstructionsComponent } from './instructions/instructions.component';
const routes: Routes = [
  { path: '', component: DisplayComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'dv',component:DvComponent},
  {path:'dowry',component:DowryComponent},
  {path:'acid',component:AcidComponent},
  {path:'sh',component:ShComponent},
  {path:'form',component:FormComponent},
  {path:'display',component:DisplayComponent},
  {path:'profile',component:ProfileComponent},
  {path:'table',component:TableComponent},
  {
    path:'Officers',
    component:OfficersComponent
  },
  {path:'instructions',component:InstructionsComponent},
  {
    path:'Victims',
    component:VictimsComponent
  },
  {path:'share',component:ShareComponent},
  {path:'update',component:UpdateComponent},
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'abour', component: AbourComponent },
  { path: 'ins', component: InsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'acts', component: ActsComponent },
  {path:'read',component:ReadComponent},
  { path: 'stories', component: StoriesComponent },
  { path: '', redirectTo: '/display', pathMatch: 'full' } // Redirect any other routes to the front page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
